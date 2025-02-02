import Image from "next/image";
import { dataStepFourImages } from "./StepFour.data";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StepFour() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    return (
        <div>
            <h2 className="text-center font-semibold text-2xl">
                Add profile details
            </h2>
            <p className="text-center">Select your profile image or upload it.</p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-4 items-center">
                {dataStepFourImages.map(({ src }) => (
                    <div
                        key={src}
                        className={`flex cursor-pointer transition-all flex-col items-center gap-2 p-1 rounded-full text-white duration-300`}
                    >
                        <Image
                            src={src}
                            alt="profile"
                            className="h-30 w-30 rounded-full"
                            width={300}
                            height={300}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <h3 className="my-3 text-lg text-center">Add your username</h3>
                <div className="grid gap-4">
                    <Input
                        placeholder="Name"
                        className="w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Name"
                        className="w-full"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mt-6 md:mt-16">
                    <Button
                        className="w-full bg-purple-600"
                        onClick={() => console.log("")}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};