import { useState } from "react"
import './style.scss'

export default function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    return (
        <>

            <section className="form">
                <div className="container-form">



                    <form>


                        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" />

                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Email" />

                        <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" id="phone" placeholder="Phone" />

                        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" placeholder="Message"></textarea>

                        <button type="submit">Submit</button>


                    </form>
                </div>
            </section>
        </>
    )
}