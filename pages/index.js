import { Button } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../auth";

export default function Home() {
  const { isAuthenticatedUser } = useAuth();
  const router = useRouter();
  return (
    <div>
      {isAuthenticatedUser == false ? (
        <div>
          <Button onClick={() => router.push("/vendor/login")}>
            Login first
          </Button>
        </div>
      ) : (
        <div>
          <Head>
            <title>Captain Shield</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h5>Welcome in Captain Shield</h5>
        </div>
      )}
    </div>
  );
}
