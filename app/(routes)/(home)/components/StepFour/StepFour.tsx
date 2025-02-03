import Image from "next/image";
import { dataStepFourImages } from "./StepFour.data";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Plus } from "lucide-react";
import { useStepConfig } from "@/hooks/useStepConfig";

export function StepFour() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [showUploadPhoto, setShowUploadPhoto] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState("");
    const { setInfoUser } = useStepConfig();

    const handleImageSelect = (src: string) => {
        setSelectedPhoto(src);
        setInfoUser((prevInfoUser) => ({
            ...prevInfoUser,
            avatarUrl: src,
        }));
    };

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
                        className={`flex cursor-pointer transition-all flex-col items-center gap-2 p-1 rounded-full text-white duration-300
                            ${selectedPhoto === src
                                ? 'bg-violet-500'
                                : 'hover:bg-violet-300'
                            }
                            `}
                        onClick={() => handleImageSelect(src)}
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

                {photoUrl && (
                    <div className={`flex flex-col items-center gap-2 p-1 rounded-full text-white duration-300 transition-all cursor-pointer
                    *:${selectedPhoto === photoUrl
                            ? 'bg-violet-500'
                            : 'bg-violet-400'
                        }
                        `}
                        onClick={() => handleImageSelect(photoUrl)}>
                        <Image
                            src={photoUrl}
                            alt="profile"
                            className="h-30 w-30 rounded-full object-cover aspect-square"
                            width={300}
                            height={300}
                        />
                    </div>
                )}

                {showUploadPhoto ? (
                    <UploadButton
                        className="rounded-md text-slate-800 bg-slate-200 h-full"
                        endpoint="profileImage"
                        onClientUploadComplete={(res) => {
                            setPhotoUrl(res?.[0].url);
                            setShowUploadPhoto(false);
                        }}
                        onUploadError={(error: Error) => {
                            console.error(error);
                        }}
                    />
                ) : (
                    <div
                        className="flex flex-col items-center justify-center cursor-pointer rounded-full hover:bg-slate-100 h-full border"
                        onClick={() => setShowUploadPhoto(!showUploadPhoto)}>
                        <Plus className="w-8 h-8" />
                    </div>
                )}
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
                        placeholder="Username"
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