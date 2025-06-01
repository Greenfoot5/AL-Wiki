import {parse} from "smol-toml";

export const load = async ({ fetch }) => {

    const t4 = await fetch("/bis.toml").then((response) => response.text());
    const t3 = await fetch("/bis_t3.toml").then((response) => response.text());
    return {
        t4: parse(t4),
        t3: parse(t3)
    };
}
