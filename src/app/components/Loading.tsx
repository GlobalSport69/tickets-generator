'use client'
import styles from './loading.module.css'
export default function Loading() {
    return (
        <div className={styles.main}>
            <div className={styles.up}>
                <div className={styles.loaders}>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                </div>
                <div className={styles.loadersB}>
                <div className={styles.loaderA}>
                    <div className={styles.ball0}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball1}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball2}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball3}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball4}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball5}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball6}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball7}></div>
                </div>
                <div className={styles.loaderA}>
                    <div className={styles.ball8}></div>
                </div>
                </div>
            </div>
        </div>
    )
}