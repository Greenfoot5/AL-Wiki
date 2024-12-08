import {parse} from "smol-toml";

export const load = async ({ fetch }) => {


    const got = await fetch("./codes.toml").then((response) => response.text());
    return parse(got);
}
