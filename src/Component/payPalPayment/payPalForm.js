import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { addUser, getGymOptions } from '../../Service/api';
// import { Button, Form } from "react-bootstrap";
import Header from "../Home/Header/Header";
import SimpleReactValidator from 'simple-react-validator';
import "./payPalForm.css";
import PayPalMethod from "./payPalIntegration";
import { useParams } from "react-router";
const Paypal = () => {
    const [arr, setArr] = useState();
    let simpleValidator = useRef(new SimpleReactValidator());
    let { pricevalue } = useParams();
    useEffect(() => {
        loadGymDetails();
    }, []);

    const loadGymDetails = async () => {
        const response = await getGymOptions();
        console.log(response.data)
        // setArr(response.data);
    };

    // const arr = [
    //     "Gold’s Gym",
    //     "Crunch Fitness",
    //     "Fitness Connection",
    //     "Glo",
    //     "Celebration",
    //     "BeyondFit Mom",
    //     "PVolve",
    //     "24 Hour Fitness",
    //     "Planet Fitness ",
    //     "Snap Fitness",
    //     "Academy of Self Defense ",
    //     "Curves,",
    // ];

    const [checkedState, setCheckedState] = useState(
        new Array(arr?.length).fill(false)
    );
    const [checkout, setCheckOut] = useState(false);
    const [paymentObj, setPaymentObj] = useState({
        referral: "",
        fName: "",
        lName: "",
        dateOfBirth: "",
        gender: "Male",
        email: "",
        pNumber: "",
        address: "",
        unit: "",
        emContactfName: "",
        emContactlName: "",
        emContacteMail: "",
        emContactpNumber: "",
        password: "",
        confirmPassword: "",
        selectedGyms: [],
        freeMessage: "",
        freePhysicalTherapy: "",
    });

    const handleCheck = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        let newarr = [];
        updatedCheckedState.map((boolen, index) =>
            boolen === true ? newarr.push(index) : ""
        );
        // console.log(newarr);
        let name_array = [];
        newarr.map((value) => {
            arr.filter((it, index) => {
                return value === index ? name_array.push(it) : "";
            });
        });
        setPaymentObj({ ...paymentObj, selectedGyms: name_array });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setPaymentObj({ ...paymentObj, [name]: value })
    }
    const submitForm = async () => {
        if (simpleValidator.current.allValid()) {
            if (paymentObj.password === paymentObj.confirmPassword) {
                await addUser(paymentObj);
                setCheckOut(true);
            } else {
                alert("password not matching")
            }
        } else {
            alert("please fill all fields")
        }
    }

    return (
        <div>
            <Header></Header>
            <section class="vh-40" style={{ backgroundColor: '#508bfc' }}>
                <div class="container  h-30">
                    <div class="row d-flex justify-content-center align-items-center h-30">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div class="card-body  text-center">

                                    <h3 class="mb-3">${pricevalue} Sign-Up Now </h3>

                                    <div class="form-outline ">
                                        <input
                                            type="number"
                                            id="typeEmailX"
                                            name="referral"
                                            value={paymentObj.referral}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("referral")
                                            }
                                            class="form-control form-control-lg"
                                        />
                                        {simpleValidator.current.message(
                                            "referral",
                                            paymentObj.referral,
                                            "required|min:6"
                                        )}
                                        <label class="form-label" for="typeEmailX">Referral Code</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="text"
                                            name="fName"
                                            value={paymentObj.fName}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("fName")
                                            }
                                            class="form-control form-control-lg"
                                        />
                                        {simpleValidator.current.message(
                                            "fName",
                                            paymentObj.fName,
                                            "required|min:3",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label">First Name</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="text"
                                            name="lName"
                                            value={paymentObj.lName}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("lName")
                                            }
                                            class="form-control form-control-lg"
                                        />
                                        {simpleValidator.current.message(
                                            "lName",
                                            paymentObj.lName,
                                            "required|min:3",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Last Name</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="date"

                                            class="form-control form-control-lg"
                                            name="dateOfBirth"
                                            value={paymentObj.dateOfBirth}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("dateOfBirth")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "dateOfBirth",
                                            paymentObj.dateOfBirth,
                                            "required",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Date of Birth</label>
                                    </div>

                                    <div class="form-outline ">
                                        <select name="gender" value={paymentObj.gender} class="formSelectTag" onChange={handleChange} id="gender">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Transgender">Transgender</option>
                                            <option value="Non-Binary">Non-Binary</option>
                                        </select><br />
                                        <label class="form-label"  >Gender</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="email"

                                            class="form-control form-control-lg"
                                            name="email"
                                            value={paymentObj.email}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("email")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "email",
                                            paymentObj.email,
                                            'required|email',
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >E-mail</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="text"

                                            class="form-control form-control-lg"
                                            name="pNumber"
                                            value={paymentObj.pNumber}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("pNumber")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "pNumber",
                                            paymentObj.pNumber,
                                            ['required', "integer", { min: 11 }, { max: 11 }],
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Phone Number</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="text"

                                            class="form-control form-control-lg"
                                            name="address"
                                            value={paymentObj.address}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("address")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "address",
                                            paymentObj.address,
                                            "required",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Address</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input type="text" class="form-control form-control-lg" />
                                        <label class="form-label"  >Apt/Suite/Unite (optional)</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="text"
                                            class="form-control form-control-lg"
                                            name="emContactfName"
                                            value={paymentObj.emContactfName}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("emContactfName")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "emContactfName",
                                            paymentObj.emContactfName,
                                            "required",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Emergency Contact First</label>
                                    </div>
                                    <div class="form-outline ">
                                        <input
                                            type="text"

                                            class="form-control form-control-lg"
                                            name="emContactlName"
                                            value={paymentObj.emContactlName}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("emContactlName")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "emContactlName",
                                            paymentObj.emContactlName,
                                            "required",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Emergency Contact Last Name</label>
                                    </div>
                                    <div class="form-outline ">
                                        <input
                                            type="email"

                                            class="form-control form-control-lg"
                                            name="emContacteMail"
                                            value={paymentObj.emContacteMail}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("emContacteMail")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "emContacteMail",
                                            paymentObj.emContacteMail,
                                            "required",
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Emergency Contact E-mail</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="text"

                                            class="form-control form-control-lg"
                                            name="emContactpNumber"
                                            value={paymentObj.emContactpNumber}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("emContactpNumber")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "emContactpNumber",
                                            paymentObj.emContactpNumber,
                                            ['required', "integer", { min: 11 }, { max: 11 }],
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label"  >Emergency Contact Phone Number</label>
                                    </div>
                                    <div class="form-outline ">
                                        <input
                                            type="password"

                                            class="form-control form-control-lg"
                                            name="password"
                                            value={paymentObj.password}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("password")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "password",
                                            paymentObj.password,
                                            ['required', { min: 8 }],
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    <div class="form-outline ">
                                        <input
                                            type="password"

                                            class="form-control form-control-lg"
                                            name="confirmPassword"
                                            value={paymentObj.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={() =>
                                                simpleValidator.current.showMessageFor("confirmPassword")
                                            }
                                        />
                                        {simpleValidator.current.message(
                                            "confirmPassword",
                                            paymentObj.confirmPassword,
                                            ['required', { min: 8 }],
                                            { className: 'text-danger' }
                                        )}
                                        <label class="form-label" for="typePasswordX">Confirm Password</label>
                                    </div>

                                    {
                                        pricevalue === "150" || pricevalue === "500" ?
                                            <>
                                                <div class="form-outline ">
                                                    <input type="password" id="typePasswordX" placeholder={`$ ${pricevalue} per Month`} disabled class="form-control form-control-lg" />
                                                    <label class="form-label" for="typePasswordX">$500 per Month</label>
                                                </div>

                                                <div class="form-outline ">
                                                    <label class="form-label"  >Select Up to 4 National Gym or Studio Memberships
                                                        (one-time fee of $25 each time you switch Gyms or Studios)   </label>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem 0" }}>
                                                    <div style={{ textAlign: "left" }}>
                                                        {arr?.map((item, index) => (
                                                            <div className="form-outline" key={index}>
                                                                <input
                                                                    type="checkbox"
                                                                    value={item}
                                                                    name={item}
                                                                    checked={checkedState[index]}
                                                                    onChange={() => handleCheck(index)}
                                                                />
                                                                <label>{item}</label><br />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div class="form-outline ">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                        name="freeMessage"
                                                    // onChange={handleChange}
                                                    // value={paymentObj.freeMessage}
                                                    />
                                                    <label>1 Free Massage every 4 months</label><br />
                                                </div>

                                                <div class="form-outline ">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                        name="freePhysicalTherapy"
                                                    // onChange={handleChange}
                                                    // value={paymentObj.freePhysicalTherapy}
                                                    />
                                                    <label>1 Free Physical Therapy session every 4 months </label><br />
                                                </div>
                                            </>
                                            : ""
                                    }
                                    {checkout ? (
                                        <PayPalMethod pricevalue={pricevalue} />
                                    ) : (
                                        <button
                                            className="checkoutBtn"
                                            onClick={submitForm}
                                        >
                                            Checkout
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Paypal;
