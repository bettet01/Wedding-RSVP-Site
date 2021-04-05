import React, {useEffect, useState} from 'react';
import "./index.css";
import {getRsvps} from "../../../services/backendService";
import {DataCard} from "../../subcomponents/DataCard";
import {Button} from "react-bootstrap";

export const Admin = () => {
    const [rsvps, setRvsp] = useState<any>({});

    const parseData = (rsvps: any) => {
        let guestCount = 0;
        let childCount = 0;
        let steak = 0;
        let chicken = 0;
        let veggie = 0;
        rsvps.forEach((res) => {
            console.log(res);
            if (res.guest.children) {
                const tempChildNumber = parseInt(res.guest.children);
                childCount += tempChildNumber;
            }
            for (const guest in res.guest) {
                if (guest !== 'children') {
                    guestCount++;
                }
                if (res.guest[guest].guestFoodChoice === 'Filet Mignon') {
                    steak++;
                }
                if (res.guest[guest].guestFoodChoice === 'Tuxedo Chicken') {
                    chicken++;
                }
                if (res.guest[guest].guestFoodChoice === 'Veggie Stack') {
                    veggie++;
                }
            }
        })
        return {guestCount, childCount, steak, chicken, veggie};
    }

    const displayData = () => {
        if (rsvps.length > 0) {
            const {guestCount, childCount, steak, chicken, veggie} = parseData(rsvps);
            return (
                <>
                    <DataCard text={"Filet Mignon"} data={steak.toString()}/>
                    <DataCard text={"Tuxedo Chicken"} data={chicken.toString()}/>
                    <DataCard text={"Veggie Stack"} data={veggie.toString()}/>
                    <DataCard text={"Number of Guests"} data={guestCount.toString()}/>
                    <DataCard text={"Number of Children"} data={childCount.toString()}/>
                </>
            )
        } else {
            return (
                <div className={'loading-container'}>
                    <h1>Loading...</h1>
                </div>
            )
        }
    }

    useEffect(() => {
        getRsvps().then((items) => {
            setRvsp(items)
        })
    }, [])

    return (
        <div className={'data-container'}>
            {displayData()}
            <div style={{height: 35}}></div>
        </div>
    )
}

export default Admin;