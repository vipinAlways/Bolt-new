import Anthropic from "@anthropic-ai/sdk";
require("dotenv").config();


const anthropic = new Anthropic()

async function main() {
    const msg = await anthropic.messages.create({
        model:"claude-3-5-haiku-20241022",
        max_tokens:1000,
        temperature:0,
        messages:[]
    })
    console.log(msg);
}

main()