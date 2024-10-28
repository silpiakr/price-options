import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar,  XAxis, YAxis, Tooltip } from 'recharts';

import { ColorRing } from 'react-loader-spinner'



const Phones = () => {

    const [phones, setPhones] = useState([]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setPhones(data.data)
        // })


        // use axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                // setPhones(data.data.data)
                console.log(phoneWithFakeData);
                setPhones(phoneWithFakeData);
                setLoading(false)
            })

    }, [])

    return (
        <div className="py-12">
            {loading && <div>
                <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />    
            </div>
            }

            <h2 className="text-5xl font-bold text-center">Phones: {phones.length}</h2>
            <BarChart
                width={600}
                height={400}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;