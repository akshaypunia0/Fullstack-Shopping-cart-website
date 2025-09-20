import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()

    let [data, setData] = useState({
        username: "",
        fullname: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }

    const onSignup = (e) => {
        e.preventDefault()

        const userData = data;

        console.log(userData);

        setData({
            username: "",
            fullname: "",
            email: "",
            password: ""
        })

        navigate("/login")

    }


    return (
        <Card className="sm:w-90% md:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex bg-gray-900 border-gray-900 text-white text-xl">
            <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                    Enter your details below to create to your account
                </CardDescription>

            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                name="username"
                                placeholder="username"
                                value={data.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="fullname">Fullname</Label>
                            </div>
                            <Input
                                id="fullname"
                                type="text"
                                name="fullname"
                                placeholder="fullname"
                                value={data.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="mail@example.com"
                                value={data.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Create password</Label>
                            <Input
                                id="password"
                                type="text"
                                name="password"
                                placeholder="password"
                                value={data.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer bg-gray-700 hover:bg-gray-800" onClick={onSignup}>
                    Signup
                </Button>
                <div className="text-lg text-gray-300 mt-4">
                    Already have an account?{" "}
                </div>
                <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full text-black cursor-pointer">
                        Login
                    </Button>
                </Link>

            </CardFooter>
        </Card>
    )
}

export default Signup