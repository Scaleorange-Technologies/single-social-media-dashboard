// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const socialPlatforms = [
//   { 
//     name: 'Instagram', 
//     color: '#E1306C', 
//     icon: '📸',
//     svg: <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm6.5-1a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
//   },
//   { 
//     name: 'Facebook', 
//     color: '#1877F2', 
//     icon: '👥',
//     svg: <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.98H8v-2.89h2.5V9.5c0-2.47 1.5-3.84 3.8-3.84 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.89h-2.35v6.98A10 10 0 0022 12z"/></svg>
//   },
//   { 
//     name: 'Twitter', 
//     color: '#1DA1F2', 
//     icon: '🐦',
//     svg: <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 5.48 5.48 0 002.4-3.02 10.95 10.95 0 01-3.47 1.33 5.47 5.47 0 00-9.3 5 15.54 15.54 0 01-11.3-5.74 5.5 5.5 0 001.7 7.32 5.43 5.43 0 01-2.48-.68v.07a5.47 5.47 0 004.39 5.37 5.47 5.47 0 01-2.46.09 5.48 5.48 0 005.11 3.81A10.97 10.97 0 013 21.54a15.49 15.49 0 008.4 2.46c10.08 0 15.6-8.35 15.6-15.6 0-.24 0-.48-.02-.72A11.16 11.16 0 0023 3z"/></svg>
//   },
//   { 
//     name: 'YouTube', 
//     color: '#FF0000', 
//     icon: '📺',
//     svg: <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8s-.2-1.4-.8-2a3.44 3.44 0 00-2.4-1.6C16.8 4 12 4 12 4s-4.8 0-6.6.4a3.44 3.44 0 00-2.4 1.6c-.6.6-.8 2-.8 2S2 9.8 2 11.6v.8c0 1.8.2 3.6.2 3.6s.2 1.4.8 2a3.4 3.4 0 002.4 1.6c1.8.2 7.6.2 7.6.2s4.8 0 6.6-.4a3.4 3.4 0 002.4-1.6c.6-.6.8-2 .8-2s.2-1.8.2-3.6v-.8c0-1.8-.2-3.6-.2-3.6zM10 14.7v-5l5 2.5-5 2.5z"/></svg>
//   }
// ];

// const demoPost = {
//   image: "🎨",
//   title: "Amazing sunset today!",
//   content: "Just captured this beautiful moment. Nature never fails to amaze me! #sunset #photography #nature"
// };

// export default function Landingpage() {
//   const [isPosting, setIsPosting] = useState(false);
//   const [postingStage, setPostingStage] = useState(0);
//   const [completedPosts, setCompletedPosts] = useState([]);
//   const [showDemo, setShowDemo] = useState(false);

//   const handleSingleClickPost = async () => {
//     setIsPosting(true);
//     setPostingStage(0);
//     setCompletedPosts([]);
//     setShowDemo(true);

//     // Simulate posting to each platform with delays
//     for (let i = 0; i < socialPlatforms.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 800));
//       setPostingStage(i + 1);
//       setCompletedPosts(prev => [...prev, i]);
//     }

//     // Show success state
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setIsPosting(false);
    
//     // Reset after showing success
//     setTimeout(() => {
//       setShowDemo(false);
//       setPostingStage(0);
//       setCompletedPosts([]);
//     }, 3000);
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
//       padding: '2rem 1rem',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       color: 'white'
//     }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ marginBottom: '3rem' }}
//         >
//           <h1 style={{
//             fontSize: 'clamp(2.5rem, 6vw, 4rem)',
//             fontWeight: '900',
//             marginBottom: '1rem',
//             background: 'linear-gradient(45deg, #fff, #f0f8ff)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             textShadow: '0 4px 8px rgba(0,0,0,0.3)'
//           }}>
//             One Click. All Platforms.
//           </h1>
//           <p style={{
//             fontSize: '1.3rem',
//             opacity: 0.9,
//             maxWidth: '600px',
//             margin: '0 auto',
//             lineHeight: '1.6'
//           }}>
//             Post to Instagram, Facebook, Twitter & YouTube simultaneously with a single click
//           </p>
//         </motion.div>

//         {/* Main Demo Section */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 2fr 1fr',
//           gap: '3rem',
//           alignItems: 'center',
//           margin: '4rem 0',
//           minHeight: '500px'
//         }}>

//           {/* Post Creation Panel */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             style={{
//               background: 'rgba(255,255,255,0.1)',
//               backdropFilter: 'blur(20px)',
//               borderRadius: '25px',
//               padding: '2rem',
//               border: '1px solid rgba(255,255,255,0.2)',
//               height: 'fit-content'
//             }}
//           >
//             <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '700' }}>
//               Create Your Post
//             </h3>
            
//             <div style={{
//               background: 'rgba(0,0,0,0.2)',
//               borderRadius: '15px',
//               padding: '1.5rem',
//               marginBottom: '1.5rem',
//               textAlign: 'left'
//             }}>
//               <div style={{
//                 fontSize: '3rem',
//                 textAlign: 'center',
//                 marginBottom: '1rem'
//               }}>
//                 {demoPost.image}
//               </div>
//               <div style={{
//                 fontSize: '1.1rem',
//                 fontWeight: '600',
//                 marginBottom: '0.5rem'
//               }}>
//                 {demoPost.title}
//               </div>
//               <div style={{
//                 fontSize: '0.9rem',
//                 opacity: 0.8,
//                 lineHeight: '1.4'
//               }}>
//                 {demoPost.content}
//               </div>
//             </div>

//             <motion.button
//               onClick={handleSingleClickPost}
//               disabled={isPosting}
//               whileHover={{ scale: isPosting ? 1 : 1.05 }}
//               whileTap={{ scale: isPosting ? 1 : 0.95 }}
//               style={{
//                 width: '100%',
//                 background: isPosting 
//                   ? 'linear-gradient(45deg, #95a5a6, #7f8c8d)' 
//                   : 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
//                 color: 'white',
//                 border: 'none',
//                 padding: '1rem 2rem',
//                 fontSize: '1.1rem',
//                 borderRadius: '15px',
//                 cursor: isPosting ? 'not-allowed' : 'pointer',
//                 fontWeight: '600',
//                 boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               {isPosting ? (
//                 <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                     style={{ marginRight: '0.5rem' }}
//                   >
//                     ⚡
//                   </motion.div>
//                   Posting...
//                 </span>
//               ) : (
//                 '🚀 Post to All Platforms'
//               )}
//             </motion.button>
//           </motion.div>

//           {/* Central Animation Area */}
//           <div style={{ position: 'relative', height: '500px' }}>
//             <AnimatePresence>
//               {showDemo && (
//                 <>
//                   {/* Central Hub */}
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0, opacity: 0 }}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: '120px',
//                       height: '120px',
//                       background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '3rem',
//                       boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
//                       border: '4px solid rgba(255,255,255,0.3)'
//                     }}
//                   >
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                     >
//                       ⚡
//                     </motion.div>
//                   </motion.div>

//                   {/* Animated Post Copies */}
//                   {socialPlatforms.map((platform, index) => {
//                     const angle = (index * 90) - 90; // Start from top, 90 degrees apart
//                     const radius = 180;
//                     const x = Math.cos(angle * Math.PI / 180) * radius;
//                     const y = Math.sin(angle * Math.PI / 180) * radius;

//                     return (
//                       <motion.div
//                         key={platform.name}
//                         initial={{ 
//                           x: 0, 
//                           y: 0, 
//                           scale: 0.3, 
//                           opacity: 0 
//                         }}
//                         animate={{ 
//                           x: x, 
//                           y: y, 
//                           scale: completedPosts.includes(index) ? 1.2 : 1,
//                           opacity: postingStage > index ? 1 : 0.3
//                         }}
//                         transition={{ 
//                           delay: index * 0.8,
//                           type: 'spring',
//                           stiffness: 100,
//                           damping: 15
//                         }}
//                         style={{
//                           position: 'absolute',
//                           top: '50%',
//                           left: '50%',
//                           transform: 'translate(-50%, -50%)',
//                           width: '100px',
//                           height: '100px',
//                           background: completedPosts.includes(index) ? platform.color : 'rgba(255,255,255,0.1)',
//                           borderRadius: '20px',
//                           display: 'flex',
//                           flexDirection: 'column',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: completedPosts.includes(index) ? 'white' : platform.color,
//                           boxShadow: completedPosts.includes(index) 
//                             ? `0 15px 30px ${platform.color}40` 
//                             : '0 5px 15px rgba(0,0,0,0.2)',
//                           border: `2px solid ${platform.color}`,
//                           transition: 'all 0.3s ease'
//                         }}
//                       >
//                         <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>
//                           {completedPosts.includes(index) ? '✅' : platform.icon}
//                         </div>
//                         <div style={{ fontSize: '0.7rem', fontWeight: '600' }}>
//                           {platform.name}
//                         </div>
//                       </motion.div>
//                     );
//                   })}

//                   {/* Connection Lines */}
//                   <svg style={{ 
//                     position: 'absolute', 
//                     top: 0, 
//                     left: 0, 
//                     width: '100%', 
//                     height: '100%', 
//                     pointerEvents: 'none' 
//                   }}>
//                     {socialPlatforms.map((platform, index) => {
//                       const angle = (index * 90) - 90;
//                       const radius = 180;
//                       const x1 = '50%';
//                       const y1 = '50%';
//                       const x2 = `calc(50% + ${Math.cos(angle * Math.PI / 180) * radius}px)`;
//                       const y2 = `calc(50% + ${Math.sin(angle * Math.PI / 180) * radius}px)`;

//                       return (
//                         <motion.line
//                           key={index}
//                           x1={x1}
//                           y1={y1}
//                           x2={x2}
//                           y2={y2}
//                           stroke={completedPosts.includes(index) ? platform.color : 'rgba(255,255,255,0.3)'}
//                           strokeWidth="3"
//                           initial={{ pathLength: 0, opacity: 0 }}
//                           animate={{ 
//                             pathLength: postingStage > index ? 1 : 0,
//                             opacity: postingStage > index ? 0.8 : 0.2
//                           }}
//                           transition={{ delay: index * 0.8 + 0.5, duration: 0.5 }}
//                         />
//                       );
//                     })}
//                   </svg>
//                 </>
//               )}
//             </AnimatePresence>

//             {/* Idle State */}
//             {!showDemo && (
//               <motion.div
//                 initial={{ opacity: 1 }}
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   textAlign: 'center'
//                 }}
//               >
//                 <div style={{
//                   fontSize: '4rem',
//                   marginBottom: '1rem',
//                   opacity: 0.6
//                 }}>
//                   🎯
//                 </div>
//                 <p style={{
//                   fontSize: '1.2rem',
//                   opacity: 0.7,
//                   fontWeight: '500'
//                 }}>
//                   Click to see the magic happen!
//                 </p>
//               </motion.div>
//             )}
//           </div>

//           {/* Platform Status Panel */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             style={{
//               background: 'rgba(255,255,255,0.1)',
//               backdropFilter: 'blur(20px)',
//               borderRadius: '25px',
//               padding: '2rem',
//               border: '1px solid rgba(255,255,255,0.2)',
//               height: 'fit-content'
//             }}
//           >
//             <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '700' }}>
//               Platform Status
//             </h3>
            
//             {socialPlatforms.map((platform, index) => (
//               <motion.div
//                 key={platform.name}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   padding: '1rem',
//                   marginBottom: '1rem',
//                   background: completedPosts.includes(index) 
//                     ? `${platform.color}20` 
//                     : 'rgba(0,0,0,0.1)',
//                   borderRadius: '15px',
//                   border: `2px solid ${completedPosts.includes(index) ? platform.color : 'transparent'}`,
//                   transition: 'all 0.3s ease'
//                 }}
//                 animate={{
//                   scale: postingStage === index + 1 ? 1.05 : 1
//                 }}
//               >
//                 <div style={{
//                   color: platform.color,
//                   marginRight: '1rem',
//                   fontSize: '1.5rem'
//                 }}>
//                   {completedPosts.includes(index) ? '✅' : platform.icon}
//                 </div>
//                 <div>
//                   <div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>
//                     {platform.name}
//                   </div>
//                   <div style={{ 
//                     fontSize: '0.8rem', 
//                     opacity: 0.7,
//                     color: completedPosts.includes(index) ? platform.color : 'inherit'
//                   }}>
//                     {completedPosts.includes(index) 
//                       ? 'Posted Successfully!' 
//                       : postingStage > index 
//                         ? 'Posting...' 
//                         : 'Ready to post'}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Success Message */}
//         <AnimatePresence>
//           {!isPosting && completedPosts.length === socialPlatforms.length && showDemo && (
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               style={{
//                 background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
//                 borderRadius: '20px',
//                 padding: '2rem',
//                 margin: '2rem auto',
//                 maxWidth: '600px',
//                 boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//               }}
//             >
//               <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
//               <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
//                 Success!
//               </h3>
//               <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
//                 Your post has been shared across all {socialPlatforms.length} platforms simultaneously!
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           style={{ marginTop: '4rem' }}
//         >
//           <h2 style={{
//             fontSize: '2.5rem',
//             fontWeight: '700',
//             marginBottom: '1rem'
//           }}>
//             Ready to Simplify Your Social Media?
//           </h2>
//           <p style={{
//             fontSize: '1.2rem',
//             opacity: 0.8,
//             marginBottom: '2rem',
//             maxWidth: '600px',
//             margin: '0 auto 2rem'
//           }}>
//             Join thousands of content creators who save hours every day with our platform
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             style={{
//               background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
//               color: 'white',
//               border: 'none',
//               padding: '1.5rem 3rem',
//               fontSize: '1.3rem',
//               borderRadius: '50px',
//               cursor: 'pointer',
//               fontWeight: '600',
//               boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
//               transition: 'all 0.3s ease'
//             }}
//           >
//             Start Free Trial
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const socialPlatforms = [
//   { 
//     name: 'Instagram', 
//     color: '#E1306C', 
//     icon: '📸',
//     gradient: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
//   },
//   { 
//     name: 'Facebook', 
//     color: '#1877F2', 
//     icon: '👥',
//     gradient: 'linear-gradient(45deg, #1877F2, #42a5f5)'
//   },
//   { 
//     name: 'Twitter', 
//     color: '#1DA1F2', 
//     icon: '🐦',
//     gradient: 'linear-gradient(45deg, #1DA1F2, #42a5f5)'
//   },
//   { 
//     name: 'YouTube', 
//     color: '#FF0000', 
//     icon: '📺',
//     gradient: 'linear-gradient(45deg, #FF0000, #ff5722)'
//   },
//   { 
//     name: 'LinkedIn', 
//     color: '#0077B5', 
//     icon: '💼',
//     gradient: 'linear-gradient(45deg, #0077B5, #2196f3)'
//   },
//   { 
//     name: 'TikTok', 
//     color: '#000000', 
//     icon: '🎵',
//     gradient: 'linear-gradient(45deg, #000000, #ff0050)'
//   }
// ];

// const demoContent = [
// //   { icon: '🎨', color: '#ff6b6b' },
// //   { icon: '📷', color: '#4ecdc4' },
// //   { icon: '✨', color: '#45b7d1' },
// //   { icon: '🌟', color: '#f9ca24' },
// //   { icon: '🎯', color: '#6c5ce7' }


//     { icon: '📸', color: '#E1306C' },  // Instagram
//     { icon: '🐦', color: '#1DA1F2' },  // Twitter
//     { icon: '📘', color: '#1877F2' },  // Facebook
//     { icon: '▶️', color: '#FF0000' }   // YouTube
//   ];
  

// export default function SocialAnimation() {
//   const [isActive, setIsActive] = useState(false);
//   const [currentContent, setCurrentContent] = useState(0);
//   const [postingStage, setPostingStage] = useState(0);
//   const [completedPosts, setCompletedPosts] = useState([]);
//   const [particles, setParticles] = useState([]);

//   // Auto cycle through content
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isActive) {
//         setCurrentContent(prev => (prev + 1) % demoContent.length);
//       }
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [isActive]);

//   // Generate particles for success animation
//   const generateParticles = () => {
//     const newParticles = [];
//     for (let i = 0; i < 20; i++) {
//       newParticles.push({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         delay: Math.random() * 2,
//         // icon: ['✨', '🎉', '⭐', '💫'][Math.floor(Math.random() * 4)]
//       });
//     }
//     setParticles(newParticles);
//   };

//   const handleActivate = async () => {
//     setIsActive(true);
//     setPostingStage(0);
//     setCompletedPosts([]);
    
//     // Start the posting sequence
//     for (let i = 0; i < socialPlatforms.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 600));
//       setPostingStage(i + 1);
//       setCompletedPosts(prev => [...prev, i]);
//     }

//     // Generate success particles
//     generateParticles();
    
//     // Show success state
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     // Reset everything
//     setTimeout(() => {
//       setIsActive(false);
//       setPostingStage(0);
//       setCompletedPosts([]);
//       setParticles([]);
//     }, 3000);
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '2rem',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       overflow: 'hidden'
//     }}>
      
//       <div style={{ 
//         position: 'relative', 
//         width: '600px', 
//         height: '600px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
        
//         {/* Success Particles */}
//         <AnimatePresence>
//           {particles.map(particle => (
//             <motion.div
//               key={particle.id}
//               initial={{ 
//                 x: '50%', 
//                 y: '50%', 
//                 scale: 0, 
//                 opacity: 1 
//               }}
//               animate={{ 
//                 x: `${particle.x}%`, 
//                 y: `${particle.y}%`, 
//                 scale: [0, 1.5, 0],
//                 opacity: [1, 1, 0]
//               }}
//               exit={{ opacity: 0 }}
//               transition={{ 
//                 delay: particle.delay,
//                 duration: 2,
//                 ease: "easeOut"
//               }}
//               style={{
//                 position: 'absolute',
//                 fontSize: '1.5rem',
//                 pointerEvents: 'none',
//                 zIndex: 10
//               }}
//             >
//               {particle.icon}
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Central Content Hub */}
//         <motion.div
//           onClick={handleActivate}
//           whileHover={{ scale: isActive ? 1 : 1.1 }}
//           whileTap={{ scale: isActive ? 1 : 0.95 }}
//           style={{
//             position: 'absolute',
//             width: '140px',
//             height: '140px',
//             background: isActive 
//               ? 'linear-gradient(135deg, #4facfe, #00f2fe)' 
//               : demoContent[currentContent].gradient || `linear-gradient(135deg, ${demoContent[currentContent].color}, #667eea)`,
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '4rem',
//             cursor: isActive ? 'default' : 'pointer',
//             boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
//             border: '4px solid rgba(255,255,255,0.3)',
//             zIndex: 5,
//             transition: 'all 0.3s ease'
//           }}
//         >
//           <motion.div
//             animate={isActive ? { 
//               rotate: 360,
//               scale: [1, 1.2, 1]
//             } : {
//               scale: [1, 1.1, 1]
//             }}
//             transition={isActive ? {
//               rotate: { duration: 2, repeat: Infinity, ease: "linear" },
//               scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
//             } : {
//               scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
//             }}
//           >
//             {isActive ? '⚡' : demoContent[currentContent].icon}
//           </motion.div>
//         </motion.div>

//         {/* Social Platform Nodes */}
//         {socialPlatforms.map((platform, index) => {
//           const angle = (index * 60) - 90; // 60 degrees apart for 6 platforms
//           const radius = 200;
//           const x = Math.cos(angle * Math.PI / 180) * radius;
//           const y = Math.sin(angle * Math.PI / 180) * radius;

//           return (
//             <React.Fragment key={platform.name}>
              
//               {/* Connection Lines */}
//               <motion.div
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 animate={{ 
//                   scaleX: isActive && postingStage > index ? 1 : 0,
//                   opacity: isActive && postingStage > index ? 0.8 : 0
//                 }}
//                 transition={{ 
//                   delay: index * 0.6 + 0.3,
//                   duration: 0.4,
//                   ease: "easeOut"
//                 }}
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   width: `${radius}px`,
//                   height: '3px',
//                   background: completedPosts.includes(index) 
//                     ? platform.gradient 
//                     : 'rgba(255,255,255,0.5)',
//                   transformOrigin: 'left center',
//                   transform: `translate(-50%, -50%) rotate(${angle}deg)`,
//                   borderRadius: '2px',
//                   zIndex: 1
//                 }}
//               />

//               {/* Platform Node */}
//               <motion.div
//                 initial={{ 
//                   x: 0, 
//                   y: 0, 
//                   scale: 0.8, 
//                   opacity: 0.6 
//                 }}
//                 animate={{ 
//                   x: x, 
//                   y: y, 
//                   scale: completedPosts.includes(index) ? 1.3 : 
//                          (isActive && postingStage === index + 1) ? 1.2 : 1,
//                   opacity: isActive ? 1 : 0.7
//                 }}
//                 whileHover={{ 
//                   scale: isActive ? (completedPosts.includes(index) ? 1.3 : 1.2) : 1.1,
//                   y: isActive ? y : y - 5
//                 }}
//                 transition={{ 
//                   delay: isActive ? index * 0.6 : 0,
//                   type: 'spring',
//                   stiffness: 150,
//                   damping: 15
//                 }}
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   width: '90px',
//                   height: '90px',
//                   background: completedPosts.includes(index) 
//                     ? platform.gradient 
//                     : 'rgba(255,255,255,0.15)',
//                   borderRadius: '25px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backdropFilter: 'blur(20px)',
//                   border: `3px solid ${completedPosts.includes(index) ? platform.color : 'rgba(255,255,255,0.3)'}`,
//                   boxShadow: completedPosts.includes(index) 
//                     ? `0 20px 40px ${platform.color}40, 0 0 20px ${platform.color}60` 
//                     : '0 10px 25px rgba(0,0,0,0.2)',
//                   cursor: 'pointer',
//                   zIndex: 3
//                 }}
//               >
//                 <motion.div 
//                   style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}
//                   animate={completedPosts.includes(index) ? {
//                     scale: [1, 1.3, 1],
//                     rotate: [0, 10, -10, 0]
//                   } : {}}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {completedPosts.includes(index) ? '✅' : platform.icon}
//                 </motion.div>
//               </motion.div>

//               {/* Pulsing Effect for Active Posting */}
//               {isActive && postingStage === index + 1 && (
//                 <motion.div
//                   initial={{ scale: 1, opacity: 0.8 }}
//                   animate={{ scale: 2, opacity: 0 }}
//                   transition={{ 
//                     duration: 1, 
//                     repeat: Infinity,
//                     ease: "easeOut"
//                   }}
//                   style={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
//                     width: '90px',
//                     height: '90px',
//                     borderRadius: '25px',
//                     border: `2px solid ${platform.color}`,
//                     zIndex: 2,
//                     pointerEvents: 'none'
//                   }}
//                 />
//               )}
//             </React.Fragment>
//           );
//         })}

//         {/* Floating Action Hint */}
//         <AnimatePresence>
//           {!isActive && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ delay: 0.5 }}
//               style={{
//                 position: 'absolute',
//                 bottom: '-100px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 color: 'rgba(255,255,255,0.8)',
//                 fontSize: '1.1rem',
//                 fontWeight: '500',
//                 textAlign: 'center',
//                 pointerEvents: 'none'
//               }}
//             >
//               <motion.div
//                 animate={{ y: [-5, 5, -5] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 👆 Click to distribute
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Success Glow Effect */}
//         {completedPosts.length === socialPlatforms.length && isActive && (
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 3, opacity: [0, 0.3, 0] }}
//             transition={{ duration: 2, ease: "easeOut" }}
//             style={{
//               position: 'absolute',
//               width: '140px',
//               height: '140px',
//               borderRadius: '50%',
//               background: 'radial-gradient(circle, rgba(79,172,254,0.4) 0%, transparent 70%)',
//               zIndex: 0,
//               pointerEvents: 'none'
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Send, Image, Zap } from 'lucide-react';

// Floating Orbs Animation
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [1, Math.random() * 2 + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );
}

// Ripple Effect
function RippleEffect({ x, y }) {
  return (
    <motion.div
      className="absolute rounded-full border-2 border-purple-400/50"
      initial={{ width: 0, height: 0, opacity: 1 }}
      animate={{ width: 300, height: 300, opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{
        left: x - 150,
        top: y - 150,
        pointerEvents: 'none',
      }}
    />
  );
}

// Platform Icons with Advanced Animations
function PlatformIcon({ platform, isSelected, onClick, index }) {
  const Icon = platform.icon;
  
  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
      whileHover={{ 
        scale: 1.2, 
        rotate: [0, -10, 10, 0],
        transition: { rotate: { duration: 0.5 } }
      }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
    >
      <motion.div
        className={`w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden ${
          isSelected ? 'bg-gradient-to-r ' + platform.color : 'bg-white/10'
        }`}
        animate={isSelected ? {
          boxShadow: [
            "0 0 20px rgba(168, 85, 247, 0.4)",
            "0 0 40px rgba(168, 85, 247, 0.8)",
            "0 0 20px rgba(168, 85, 247, 0.4)"
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
        
        {isSelected && (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-white/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}
      </motion.div>
      
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: isSelected ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-2 h-2 bg-green-400 rounded-full" />
      </motion.div>
    </motion.div>
  );
}

// Animated Post Composer
function AnimatedComposer({ onPost, selectedPlatforms }) {
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async () => {
    if (content.trim() && selectedPlatforms.length > 0) {
      setIsPosting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      onPost({ content, platforms: selectedPlatforms });
      setContent('');
      setIsPosting(false);
    }
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <motion.div
        className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 bg-transparent text-white text-lg placeholder-white/50 resize-none outline-none relative z-10"
          placeholder="✨ Create something amazing..."
          whileFocus={{ scale: 1.02 }}
        />
        
        <div className="flex justify-between items-center mt-6 relative z-10">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
            >
              <Image className="w-5 h-5 text-white/70" />
            </motion.button>
          </div>
          
          <motion.button
            onClick={handlePost}
            disabled={!content.trim() || selectedPlatforms.length === 0 || isPosting}
            className={`px-8 py-4 rounded-full font-medium transition-all relative overflow-hidden ${
              content.trim() && selectedPlatforms.length > 0 && !isPosting
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={content.trim() && selectedPlatforms.length > 0 && !isPosting ? { scale: 1.05 } : {}}
            whileTap={content.trim() && selectedPlatforms.length > 0 && !isPosting ? { scale: 0.95 } : {}}
          >
            <AnimatePresence mode="wait">
              {isPosting ? (
                <motion.div
                  key="posting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {content.trim() && selectedPlatforms.length > 0 && !isPosting && (
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Animated Success Burst
function SuccessBurst({ show, onComplete }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos(i * 30 * Math.PI / 180) * 200,
            y: Math.sin(i * 30 * Math.PI / 180) * 200,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  );
}

const platforms = [
  { id: 'instagram', icon: Instagram, color: 'from-pink-500 to-purple-600' },
  { id: 'facebook', icon: Facebook, color: 'from-blue-600 to-blue-700' },
  { id: 'twitter', icon: Twitter, color: 'from-sky-400 to-blue-500' },
  { id: 'youtube', icon: Youtube, color: 'from-red-500 to-red-600' },
];

export default function Landingpage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const togglePlatform = (platformId, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    setRipples(prev => [...prev, { x, y, id: Date.now() }]);
    
    setSelectedPlatforms(prev => 
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
    
    setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 1500);
  };

  const handlePost = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FloatingOrbs />
      
      {ripples.map(ripple => (
        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Animated Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-size-200 bg-pos-0"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: '200%' }}
          >
            Social Media Dashboard
          </motion.h1>
        </motion.div>

        {/* Platform Selection */}
        <motion.div
          className="flex space-x-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {platforms.map((platform, index) => (
            <PlatformIcon
              key={platform.id}
              platform={platform}
              index={index}
              isSelected={selectedPlatforms.includes(platform.id)}
              onClick={(e) => togglePlatform(platform.id, e)}
            />
          ))}
        </motion.div>

        {/* Animated Connection Lines */}
        <AnimatePresence>
          {selectedPlatforms.length > 1 && (
            <motion.div
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg width="400" height="100" className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                {selectedPlatforms.map((_, index) => {
                  if (index === selectedPlatforms.length - 1) return null;
                  return (
                    <motion.line
                      key={index}
                      x1={50 + index * 80}
                      y1={50}
                      x2={130 + index * 80}
                      y2={50}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Post Composer */}
        <div className="w-full max-w-2xl">
          <AnimatedComposer onPost={handlePost} selectedPlatforms={selectedPlatforms} />
        </div>
      </div>

      <SuccessBurst show={showSuccess} onComplete={() => setShowSuccess(false)} />
    </div>
  );
}