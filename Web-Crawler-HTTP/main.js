const {crawlPage} = require('./crawl.js')

async function main(){
    if(process.argv.length < 3){
        console.log("no website");
        process.exit(1)
    }else if(process.argv.length > 3){
        console.log("too many args");
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log(`starting crawl ${baseURL}`);
    const pages = await crawlPage(baseURL, baseURL, {})
    // console.log(pages);

    for(const page of Object.entries(pages)){
        console.log(page);
    }
}

main()