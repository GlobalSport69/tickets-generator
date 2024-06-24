/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import getTicketData from '../services/getTicketData'
import { useSearchParams } from 'next/navigation'
import Loading from './components/Loading'
import Notfound from './components/Notfound'

function getTicketDetails(code: string | null) {
  return getTicketData(code)
}

function formatNumber(data: string) {
  const amountStr = data.toString()
  const amountFormat = amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return amountFormat
}

function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('es-ES') + ` ` + new Date(date).toLocaleTimeString('es-ES')
}

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const [ticketData, setTicketData] = useState(null)
  const searchParams = useSearchParams()

  function groupBy(array: any[], properties: string[]) {
    return array.reduce((acc, obj) => {
      let key = properties.map(prop => obj[prop]).join('-');
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTicketDetails(searchParams.get('code'))
      setTicketData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [searchParams])

  const displayContent = () => {
    if (isLoading) {
      return (
        <><Loading /></>
      )
    } else if (Object.keys(ticketData?.bets).length > 0) {
      const groupedBets: Record<string, any[]> = ticketData?.bets? groupBy(ticketData.bets, ['product_id', 'lotery_id', 'amount']) : null;
      return (
          <>
          <article className={styles.ticket}>
            <header className={styles.ticket__header}>
              <p>### PremierPluss ###</p>
              <p>Agencia: {ticketData.agencia}</p>
              <p>Numero Ticket: {ticketData.id}</p>
              <p>Fecha: {formatDate(ticketData.created)}</p>
            </header>
            <div className={styles.ticket__divider}>
              <div className={styles.ticket__notch}></div>
              <div className={`${styles.ticket__notch} ${styles.ticket__notch__right}`}></div>
            </div>
            <div className={styles.ticket__body}>
              {groupedBets && Object.entries(groupedBets).map(([key, bets]) =>{
                let [product_id, lotery_id, amount] = key.split('-');
                let betDescriptions = bets.map(bet => `${bet.number}`).join(', ');
                return (
                  <section className={styles.ticket__section} key={key}>
                    <h3>{bets[0].lotery}</h3>
                    <p>
                      <span>{betDescriptions}</span>
                      <span> X {amount}</span>
                    </p>
                    {bets[0].limit!== '' && <p>{bets[0].limit}</p>}
                  </section>
                )
              })}
            </div>
            <footer className={styles.ticket__footer}>
              <span>Total Ticket {ticketData.moneda}: {ticketData.total_amount}</span>
              <span>El ticket caduca a los 3 dias</span>
              <br></br>
              <span style={{textAlign: 'center'}}><a href='https://premierpluss.com/' rel="nofollow noopener" target='_blank'>..:: PremierPluss ::..</a></span>
            </footer>
          </article>
        </>
      )
    }else{
      return (
        <><Notfound /></>
      )
    }
  }
  return (
    <div>
      {displayContent()}
    </div>
  )
}