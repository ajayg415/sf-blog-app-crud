/**
 * Author: Ajay Gangisetti
 */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {fetchAllBlogs, fetchBlockById, createBlog, updateBlog, deleteBlogById, deleteBlogs} from './Components/Api/Api';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Blogdetails from './Components/Blogdetails/Blogdetails'

const mock_data = [
	{"id":6055,"title":"What is Lorem Ipsum?","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","timestamp":"2020-01-12T06:46:48.978Z"},
	{"id":6056,"title":"Why do we use it?","text":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","timestamp":"2020-01-12T06:47:29.399Z"},
	{"id":6057,"title":"Where does it come from?","text":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.","timestamp":"2020-01-12T06:47:52.590Z"},
	{"id":6058,"title":"Where can I get some?","text":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.","timestamp":"2020-01-12T06:48:05.880Z"},
	{"id":5961,"title":"Darth Vader Asks Mom for Allowance testing","text":"In yet another move bound to mark the demise of the Galactic Empire, the once powerful\n Jedi-gone-rogue has begun taking drastic measures to continue funding the second Death\n Star. Already months late, the latest enterprise of Darth Sidious's right hand is in\n danger of being sold at an upcoming scrap metal auction on Tataouine later this year.\n When asked for comment, Mr. Skywalker seemed to be short of breath...","timestamp":"2020-01-06T10:16:58.702Z"},
	{"id":5963,"title":"Kitten Teases Puppy; Bites Own Tail","text":"Yet another shot has been fired in the ever-waging puppy/kitten battle by the ferocious\nfelines. At 2:03pm PST, Fred the Kitten approached Sam the Puppy, announced his intentions\nto bite his own tail. Sam, having tried this many times before, assured Fred that such a\nfeat was impossible and that teasing him like that was cause for him to taddle to The Master.\nNot concerned with the repricussions of the potential intervention of The Human, Fred\nproceeded to grab the very tip of his tail with his paws and then put it in his mouth.\n\"Take that, silly dog!\" yelled Fred between mouths full of fur as Sam ran to find The\nMaster.","timestamp":"2020-01-06T10:16:58.715Z"}
]

function App() {
  //const [data, setData] = useState(mock_data);
  const [data, setData] = useState([]);

  useEffect(()=>{
    console.log('inside useeffect');
    (async ()=>{
      const data = await fetchAllBlogs();
      setData(data);
    })();
  },[]);

  const addNew = newBlog =>{
    (async ()=>{
      const newRec = await createBlog(newBlog);
      setData([...data, newRec]);
      console.log(data)
    })();
  };

  const deleteBlog = id =>{
    (async ()=>{
      const deletedRec = await deleteBlogById(id);
      //setData([...data, newRec]);
      setData(await fetchAllBlogs());
    })();
  };

  const updatingBlog= blog => {
    (async ()=>{
      const rec = await updateBlog(blog);
      //setData([...data, newRec]);
      let d = data;
      for(let i=0;i<d.length;i++){
        if(d[i].id === rec.id){
          d[i] = rec;
          break;
        }
      }
      setData(d);
    })();
  }

  return (
    <div className="App container-fluied">
      <Header/>
      <div className="row">
        <Sidebar data={data} addNew={addNew}/>
        <Blogdetails data={data} deleteBlog={deleteBlog} updatingBlog={updatingBlog}/>
      </div>
    </div>
  );
}

export default App;
