import {parse} from "smol-toml";

export const load = async ({ fetch }) => {

    const got = await fetch("/bis_t3.toml").then((response) => response.text());
    return parse(got);
}
