

import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { CookiesUser } from "./cookie";

interface Props {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
    const router = useRouter();
    useEffect(() => {
        const user = CookiesUser;

        if (!user) {
            router.push("/auth/login");
        }
    }, [children, router]);
    return <div>{children}</div>;
};
