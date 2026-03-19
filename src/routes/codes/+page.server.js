import { parse } from "smol-toml";
import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    try {
        // Fetch the TOML file from the static directory
        const response = await fetch("./codes.toml");

        if (!response.ok) {
            throw new Error(`Failed to load codes.toml: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        const data = parse(text);

        // Ensure we return a structured object even if the TOML is empty
        return {
            future: data.future || [],
            active: data.active || [],
            expired: data.expired || []
        };
    } catch (e) {
        console.error("Error loading codes:", e);
        // Return empty arrays instead of crashing the page
        return {
            future: [],
            active: [],
            expired: []
        };
    }
};
