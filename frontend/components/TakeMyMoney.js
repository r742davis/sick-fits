import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

function totalItems (cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
}

class TakeMyMoney extends React.Component {
  onToken = (res) => {
    console.log("On Token Open");
    console.log(res.id)
  }
  render() {
    return (
      <User>
        {({ data: { me }}) => (
          <StripeCheckout
            amount={calcTotalPrice(me.cart)}
            name="Sick Fits"
            description={`Order of ${totalItems(me.cart)}`}
            image={me.cart[0].item && me.cart[0].item.image}
            stripeKey="pk_test_3h8gL5NshQXYX9TNn24EPtmZ00SUv3BMBt"
            currency="USD"
            email={me.email}
            token={res => this.onToken(res)}
          >
            {this.props.children}
          </StripeCheckout>
            
        )}
      </User>
    )
  }
}

export default TakeMyMoney;