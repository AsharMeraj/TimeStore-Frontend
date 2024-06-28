import React from "react";;
import Link from "next/link";
import Button from "../Components/Button/Button";

const Success = () => {
    return (
            <div className="py-[8rem] flex items-center">
                <div className="w-fit mx-auto flex flex-col">
                    <div className="text-3xl font-bold text-[--Primary-Color] text-center">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-xl font-bold mt-[3rem] text-center">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-lg mt-[2rem] text-center">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline text-[--Primary-Color] text-center">asharmeraj55@gmail.com</div>

                    <Link href="/" className="font-bold mt-[3rem] text-center m-auto w-fit">
                        <Button name="CONTINUE SHOPPING" />
                    </Link>
                </div>
            </div>
    );
};

export default Success;