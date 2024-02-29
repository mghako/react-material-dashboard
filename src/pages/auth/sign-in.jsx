import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";


export function SignIn() {
  return (
    <section className="flex justify-center align-middle items-center h-screen">
      <div className="lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Inventory & Asset</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              size="md"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="md"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth>
            Sign In
          </Button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
