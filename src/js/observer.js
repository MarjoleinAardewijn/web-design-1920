// const body = document.querySelector('body');
//
// const observeDOM = (function(){
//     const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
//
//     return function( obj, callback ){
//         if( !obj || !obj.nodeType === 1 ) return; // validation
//
//         if( MutationObserver ){
//             // define a new observer
//             let obs = new MutationObserver(function(mutations, observer){
//                 callback(mutations);
//             });
//             // have the observer observe foo for changes in children
//             obs.observe( obj, { childList:true, subtree:true });
//         }
//     }
// })();
//
// // Observe a specific DOM element:
// observeDOM(body, function(){
//     console.log('changed!');
//
//     const focussableElements = document.querySelectorAll('.focussable');
//
//     removeFocus();
//     focusElement();
//
//     console.log(focussableElements);
// });