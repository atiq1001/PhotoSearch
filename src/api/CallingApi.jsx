const apiKey = "5H4P5hQ8ljNPJQnLEd7awZnUPTHvFMfpGqI6a9D0r0k";

export async function searchImage(topic) {

  try{

    const res = await fetch(`https://api.unsplash.com/search/photos?query=${topic}&per_page=30&client_id=${apiKey}`);
    const data = await res.json();
    console.log(data);
     return data;


  }catch(err){
    console.log(err);
  }
}

