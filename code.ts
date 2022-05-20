figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if(msg.type === 'applyOpacity'){
    for(const node of figma.currentPage.selection){
      if("opacity" in node){
        node.opacity = msg.opacityValue/100;
      }
    }
  }else if(msg.type === 'exitPlugin'){
    figma.closePlugin();
  }
}