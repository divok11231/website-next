import React from 'react'
import styles from '../styles/OtherLinks/terms.module.css'
import Head from 'next/head'
import Link from 'next/link'
function shipping() {
  return (
    <>
      <Head>
        <title>Shipping and Deliveries| E-Cell BPHC</title>
      </Head>
      <div>
        <h1>Shipping Policy</h1>
        E-Cell BPHC ("we" and "us") is the operator of
        (https://www.ecellbphc.in) ("Website"). By placing an order through this
        Website you will be agreeing to the terms below. These are provided to
        ensure both parties are aware of and agree upon this arrangement to
        mutually protect and set expectations on our service.
        <h2>General</h2>
        <p>
          Subject to stock availability. We try to maintain accurate stock
          counts on our website but from time-to-time there may be a stock
          discrepancy and we will not be able to fulfill all your items at time
          of purchase. In this instance, we will fulfill the available products
          to you, and contact you about whether you would prefer to await
          restocking of the backordered item or if you would prefer for us to
          process a refund.
        </p>
        <h2>Shipping Costs</h2>
        <p>
          Shipping costs are calculated during checkout based on weight,
          dimensions and destination of the items in the order. Payment for
          shipping will be collected with the purchase. This price will be the
          final price for shipping cost to the customer.
        </p>
        <h2>Returns</h2>
        <p>
          E-Cell BPHC will happily accept returns due to change of mind as long
          as a request to return is received by us within 1 days of receipt of
          item and are returned to us in original packaging, unused and in
          resellable condition. Return shipping will be paid at the customers
          expense and will be required to arrange their own shipping. Once
          returns are received and accepted, refunds will be processed to store
          credit for a future purchase. We will notify you once this has been
          completed through email. (E-Cell BPHC) will refund the value of the
          goods returned but will NOT refund the value of any shipping paid.
        </p>
        <h2>Items Out Of Stock</h2>
        <p>
          If an item is out of stock, we will cancel and refund the out-of-stock
          items and dispatch the rest of the order.
        </p>
        <h2>Customer service</h2>
        <p>
          For all customer service enquiries, please email us at
          ecell@hyderabad.bits-pilani.ac.in
        </p>
      </div>
    </>
  )
}

export default shipping
