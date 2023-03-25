import React, { useState } from 'react'
// import { Offcanvas } from 'react-bootstrap'
import styles from '../../styles/Merch/merch.module.css'
import cstyles from '../../styles/Merch/cart.module.css'

function Merch() {
  const [cart, setCart] = useState(true)
  const [carlist, setList] = useState([])

  const cartQuantity = carlist.length

  const list = [
    {
      id: '1',
      name: 'Merch 1',
      cost: 350,
      added: false,
      count: 1,
      img: '../../assets/images/Merch/1.png'
    },
    {
      id: '2',
      name: 'Merch 2',
      cost: 350,
      added: false,
      count: 1,
      img: '../../assets/images/Merch/2.png'
    },
    {
      id: '3',
      name: 'Merch 3',
      cost: 350,
      added: false,
      count: 1,
      img: '../../assets/images/Merch/3.png'
    },
    {
      id: '4',
      name: 'Merch 4',
      cost: 350,
      added: false,
      count: 1,
      img: '../../assets/images/Merch/4.png'
    },
    {
      id: '5',
      name: 'Merch 5',
      cost: 350,
      added: false,
      count: 1,
      img: '../../assets/images/Merch/5.png'
    }
  ]

  function addItemToList(id, name, cost, added, count) {
    let found = false
    for (let i = 0; i < carlist.length; i++) {
      if (carlist[i].id === id) {
        found = true
        const ctr = carlist[i].count
        setList([
          ...carlist.slice(0, i),
          Object.assign({}, carlist[i], { count: ctr + 1 }),
          ...carlist.slice(i + 1)
        ])
      }
    }
    if (!found) {
      setList([
        ...carlist,
        { id: id, name: name, cost: cost, added: true, count: count }
      ])
    }
    for (let i = 0; i < carlist.length; i++) {
      price += carlist[i].cost * carlist[i].count
    }
    console.log(carlist, cartQuantity)
  }
  var price = 0
  function CartPrice() {
    for (let i = 0; i < carlist.length; i++) {
      price = price + carlist[i].cost * carlist[i].count
    }
    console.log(price)
    return price
  }
  // function updateCount(id) {
  //   for (let i = 0; i < carlist.length; i++) {
  //     if (carlist[i].id === id) {
  //       carlist[i].count += 1
  //     }
  //   }
  //   console.log(carlist, 'updatedCount')
  //   return carlist
  // }
  // console.log(price)
  function handleAdd(id, name, cost, added, count) {
    console.log('chal gaya')
    addItemToList(id, name, cost, added, count)
  }
  const cartMove = () => {
    setCart(!cart)
  }
  const cartRemove = (id) => {
    console.log(id)
    // const obj = carlist.find((obj) => obj.id === id)
    let a = []
    for (let i = 0; i < carlist.length; i++) {
      if (carlist[i].id === id) {
        if (carlist[i].count > 1) {
          carlist[i].count -= 1
          a.push(carlist[i])
        }
      } else {
        a.push(carlist[i])
      }
    }
    console.log(a, 'hihi')

    setList(a)
    // const newList = [...list];
    // newList[id] = { ...newList[id] };
    // delete newList[index][prop];
    // setList(newList);
  }
  // console.log(carlist.some(obj => obj.id === item.id && obj.name === item.name && obj.cost!=item.cost))

  console.log(list[1].img)
  return (
    <>
      <div className={styles.container}>
        {/* Button Logo */}

        <button
          style={{ width: '3rem', height: '3rem' }}
          className={styles.CartLogo}
          onClick={cartMove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          <div className={styles.cartsubcircle}>{cartQuantity}</div>
        </button>

        {/* Shopping Cart */}
        <div className={cart ? cstyles.container : cstyles.container2}>
          <div className={cstyles.heading}>
            <h1 className={cstyles.mainheading}>Shopping Cart</h1>
          </div>
          <div className={cstyles.outer}>
            {carlist.map((item) => {
              return (
                <>
                  <div className={cstyles.item}>
                    <div className={cstyles.image}></div>
                    <div className={cstyles.content}>
                      <div className={cstyles.itemheading}>
                        <h1>{item.name}</h1>
                      </div>
                      <div className={cstyles.details}>
                        {' '}
                        Price : {'\u20B9'}
                        {item.cost} <br />
                        Quantity : {item.count}
                      </div>
                      <button
                        className={cstyles.btn}
                        onClick={() => cartRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div className={cstyles.footer}>
            <div className={cstyles.price}>
              <h1>Total Price </h1>
              <p className={cstyles.prices}>{CartPrice()}</p>
            </div>
            <div className={cstyles.paybtn}>
              <button className={cstyles.finalbtn}>Buy</button>
            </div>
          </div>
        </div>

        {/* Merch Card Render */}
        {list.map((item) => {
          return (
            <>
              <div
                className={styles.card}
                  // style={{
                  //   background: "url('${item.img}')"
                  // }}
              >
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{item.name}</h2>
                  <p className={styles.cardBody}>
                    Price : {'\u20B9'} {item.cost}
                  </p>

                  <a
                    href="#"
                    className={styles.button}
                    onClick={() => {
                      handleAdd(
                        item.id,
                        item.name,
                        item.cost,
                        item.added,
                        item.count
                      )
                      // CartPrice()
                      // updateCount(i  tem.id)
                    }}
                  >
                    Add to cart
                  </a>

                  {/* {item.added ? (
              <div className={styles.addbutton}>Added!</div>
            ) : (
            )} */}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default Merch
