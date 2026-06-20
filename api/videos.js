export default async function handler(req,res){

try{

const response = await fetch(
'https://api.vizey.example/videos',
{
headers:{
'Authorization':
`Bearer ${process.env.VIZEY_API_KEY}`
}
}
);

const data =
await response.json();

res.setHeader(
'Cache-Control',
's-maxage=3600, stale-while-revalidate'
);

res.status(200).json(data);

}catch(err){

res.status(500).json({
error:'API Error'
});

}

}
