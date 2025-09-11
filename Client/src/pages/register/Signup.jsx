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

const Signup = () => {
    return (
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto flex bg-gray-800 border-gray-800 text-white text-xl">
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
                            <Label htmlFor="username">Enter Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="username"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="fullname">Enter Fullname</Label>
                            </div>
                            <Input
                                id="fullname"
                                type="text" 
                                placeholder="fullname"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Enter Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="mail@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Create password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="password"
                                required
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer">
                    Signup
                </Button>
                <div className="text-lg text-gray-300 mt-4">
                    Already have an account?{" "}
                </div>
                <Button variant="outline" className="w-full text-black cursor-pointer">
                    Login
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Signup