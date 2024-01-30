import React ,{useEffect} from 'react'
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
//import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {Typography} from "@mui/material" 
import TimeLine from '../TimeLine/TimeLine';

import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
    SiNextdotjs
    
  } from "react-icons/si";
  import Projectscards from "../projectscards/projectscards";

function Home() {
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
    
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(4,4,8);
    
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    
        const moonGeometry = new THREE.SphereGeometry(2,64,64);
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture});
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      //  moon.position.set(-4,-5, 0);
    
        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus.position.set(8, 5, 5);
    
        const pointLight = new THREE.DirectionalLight(0xffffff, 1);
       // const pointLight2 = new THREE.DirectionalLight(0xffffff,0.1);
    
        pointLight.position.set(8,5,5);
        pointLight.target.position.set(0,0,0);
        // pointLight2.position.set(-8,-5,-5);
        // pointLight2.target.position.set(-4,0,0);
        
       // const lightHelper= new THREE.PointLightHelper(pointLight);
   // const controls= new OrbitControls(camera,renderer.domElement);
        scene.add(moon);
        scene.add(pointLight);
        scene.add(venus);
        
      //  scene.add(lightHelper)
       //  scene.add(pointLight2);

        scene.background = spaceTexture;
    
        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
          if (e.clientX <= window.innerWidth / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }
    
          if (e.clientX > window.innerWidth / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
    
          if (e.clientY > window.innerHeight / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }
    
          if (e.clientY <= window.innerHeight / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
        });
    
        const animate = () => {
          requestAnimationFrame(animate);
          moon.rotation.y += 0.001;
          venus.rotation.y += 0.001;
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.render(scene, camera);
        };
    
        animate();
    },[])
  return (
   <div className="home">
 <canvas className="homeCanvas"></canvas>
 <div className="homeContainer">
   <Typography variant="h3">TIMELINE</Typography>
    <TimeLine timelines={[1,2,3,4]}/>
 </div>
 <div className="homeSkills">
    <Typography variant="h3">SKILLS</Typography>
<div className="homeCubeSkills">
<div className="homeSkillsFaces  homeSkillsFace1">
        <img
        src="https://img.freepik.com/free-vector/ultraviolet-banner-server-room-abstract-technology-objects-cloud-storage_39422-562.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais"
        alt="Face1"/>
        
    </div>
    <div className="homeSkillsFaces  homeSkillsFace2">
        <img
        src="https://img.freepik.com/free-vector/artificial-intelligence-isometric-icon-server-room-datacenter-database-concept_39422-772.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais"
        alt="Face2" />
        
    </div>
    <div className="homeSkillsFaces  homeSkillsFace3">
        <img
        src="https://img.freepik.com/free-vector/analytics-data-science-database-analysis-statistical-report-information-processing-automation-datacenter-expert-making-report-vector-isolated-concept-metaphor-illustration_335657-2781.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais"
        alt="Face3" />
        
    </div>
    <div className="homeSkillsFaces  homeSkillsFace4">
        <img
        src="https://img.freepik.com/free-vector/isometric-technology-futuristic-background_23-2149124521.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais"  alt="Face4"/>
        
    </div>
    <div className="homeSkillsFaces  homeSkillsFace5">
        <img
        src="https://img.freepik.com/free-vector/mobile-apps-development-application-installing-update-concept-smartphone-setting_39422-988.jpg?size=626&ext=jpg"  alt="Face5"/>
        
    </div>
    <div className="homeSkillsFaces  homeSkillsFace6">
        <img
        src="https://img.freepik.com/free-vector/ultraviolet-banner-server-room-abstract-technology-objects-cloud-storage_39422-562.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais"
        alt="Face6" />
        
    </div>
 </div>
 <div className="cubeShadow"></div>
 <div className="homeskillsbox">
 <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
          <SiNextdotjs/>
 </div>
</div>
<div className="homeProjects">
    <Typography variant="h3">My Projects</Typography>
    <div className="homeProjectsWrapper">
    <Projectscards image="https://img.freepik.com/free-vector/isometric-technology-futuristic-background_23-2149124521.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais" title="Project Video"/>
    <Projectscards image="https://img.freepik.com/free-vector/isometric-technology-futuristic-background_23-2149124521.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais" title="Project Video"/>
    <Projectscards image="https://img.freepik.com/free-vector/isometric-technology-futuristic-background_23-2149124521.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais" title="Project Video"/>
        <Projectscards image="https://img.freepik.com/free-vector/isometric-technology-futuristic-background_23-2149124521.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais" title="Project Video"/>
    </div>
</div>

   </div>
  )
}

export default Home
