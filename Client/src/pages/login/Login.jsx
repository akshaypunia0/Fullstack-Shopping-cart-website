import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

const Login = () => {

    const onLogin = () => {

    }


    return (
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex bg-gray-900 border-gray-900 text-white text-xl">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your details below to login to your account
                </CardDescription>

            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer bg-gray-700 hover:bg-gray-800" onClick={onLogin}>
                    Login
                </Button>
                <div className="text-lg text-gray-300 mt-4">
                    Don't have an account?{" "}
                </div>
                <Link to="/signup" className="w-full">
                    <Button variant="outline" className="w-full text-black cursor-pointer">
                        Signup
                    </Button>
                </Link>

            </CardFooter>
        </Card>

    )
}

export default Login