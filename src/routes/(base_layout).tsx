import { A, Outlet } from "solid-start";
import { Nav } from "~/component";


export default function Layout()
{
    return <>
        <Nav>
            <A href="/">Home</A>
        </Nav>

        <Outlet />
    </>;
}