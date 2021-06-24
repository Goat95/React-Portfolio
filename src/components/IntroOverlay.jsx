import React, { useEffect } from 'react';
import styled from 'styled-components';
import imagesLoaded from 'imagesloaded';
import $ from 'jquery';
import 'jquery-ui';

const IntroOverlayStyles = styled.div`
  .progress {
    background: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5000;
  }
  .progress2 {
    background: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 4999;
  }
  .progress-bar {
    border-top: 1px solid rgba(160, 160, 160);
    position: absolute;
    top: 50%;
    width: 0%;
  }
  .progress-text {
    font-size: 14px;
    margin-top: 10px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
  }
  .porgress-complete .progress-bar {
    border-top-color: rgb(255, 255, 255);
  }
`;

export default function IntroOverlay() {
  function imagesProgress(){
    const $container = $("#progress");
    const $container2 = $(".progress2");
    const	$progressBar = $container.find(".progress-bar");
    const $progressText = $container.find(".progress-text");
    const imgLoad = imagesLoaded("body");
    const imgTotal = imgLoad.images.length;	
    let imgLoaded = 0;										
    let current = 0;					
    const progressTimer = setInterval(updateProgress, 1000 / 60);
    
    imgLoad.on("progress", function(){
      imgLoaded++;
    });
  
    function updateProgress(){
      var target = ( imgLoaded / imgTotal) * 100;
      
      current += ( target - current) * 0.1;
      $progressBar.css({ width: current + '%' });
      $progressText.text( Math.floor(current) + '%' );
      
      if(current >= 100){
        clearInterval(progressTimer);
        $container.addClass("progress-complete");
        $progressBar.add($progressText)
          .delay(500)
          .animate({opacity: 0},250,function(){
            $container.animate({top: '-110%'}, 1000);
            $container2.animate({bottom: '-110%'}, 1000);
          });
        $("body").addClass("active");
      }
      if(current > 99.9){
        current = 100;
      }
    }	
  }
  useEffect(() => {
    imagesProgress();
  }, []);

  return (
    <IntroOverlayStyles>
      <div className="progress" id="progress">
        <span className="progress-bar"></span>
        <span className="progress-text">0%</span>
      </div>
    </IntroOverlayStyles>
  )
}
