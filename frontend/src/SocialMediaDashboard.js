
// // // import React, { useState } from 'react';
// // // import { Instagram, Facebook, Youtube, Twitter, Image, MessageCircle, Send, Zap } from 'lucide-react';

// // // export default function SocialMediaDashboard() {
// // //   const [imageUrl, setImageUrl] = useState('');
// // //   const [caption, setCaption] = useState('');
// // //   const [postingStatus, setPostingStatus] = useState({});
// // //   const [allPlatformsStatus, setAllPlatformsStatus] = useState('');

// // //   const platforms = [
// // //     { 
// // //       id: 'instagram', 
// // //       name: 'Instagram', 
// // //       icon: Instagram, 
// // //       color: 'from-purple-500 to-pink-500',
// // //       endpoint: '/api/instagram/post',
// // //       requiresImage: true,
// // //     },
// // //     { 
// // //       id: 'facebook', 
// // //       name: 'Facebook', 
// // //       icon: Facebook, 
// // //       color: 'from-blue-600 to-blue-700',
// // //       endpoint: '/api/facebook/post',
// // //       requiresImage: true,
// // //     },
// // //     { 
// // //       id: 'twitter', 
// // //       name: 'Twitter', 
// // //       icon: Twitter, 
// // //       color: 'from-sky-400 to-blue-500',
// // //       endpoint: '/api/twitter/post',
// // //       requiresImage: true,
// // //     },
// // //     { 
// // //       id: 'youtube', 
// // //       name: 'YouTube', 
// // //       icon: Youtube, 
// // //       color: 'from-red-500 to-red-600',
// // //       endpoint: '/api/youtube/post',
// // //       requiresImage: false,
// // //     }
// // //   ];

// // //   const isCaptionValid = caption.trim().length > 0;
// // //   const isImageValid = imageUrl.trim().length > 0;

// // //   const handleSinglePost = async (platform) => {
// // //     if (platform.requiresImage && !isImageValid) return;
// // //     if (!isCaptionValid) return;
// // //     if (platform.id === 'youtube' && isImageValid) return; // block YouTube post with image

// // //     setPostingStatus(prev => ({ ...prev, [platform.id]: 'Posting...' }));

// // //     try {
// // //       const bodyPayload = platform.requiresImage
// // //         ? { image_url: imageUrl, caption }
// // //         : { caption };

// // //       const response = await fetch(`http://localhost:5000${platform.endpoint}`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(bodyPayload),
// // //       });

// // //       const data = await response.json();

// // //       if (data.success) {
// // //         setPostingStatus(prev => ({ 
// // //           ...prev, 
// // //           [platform.id]: '✅ Posted successfully!' 
// // //         }));
// // //       } else {
// // //         setPostingStatus(prev => ({ 
// // //           ...prev, 
// // //           [platform.id]: `❌ Failed: ${data.error || 'Unknown error'}` 
// // //         }));
// // //       }
// // //     } catch (error) {
// // //       setPostingStatus(prev => ({ 
// // //         ...prev, 
// // //         [platform.id]: `❌ Error posting to ${platform.name}` 
// // //       }));
// // //     }
// // //   };

// // //   const handlePostToAll = async () => {
// // //     if (!isCaptionValid) return;

// // //     setAllPlatformsStatus('Posting to all platforms...');
// // //     setPostingStatus({});

// // //     const filteredPlatforms = platforms.filter(platform => {
// // //       if (platform.id === 'youtube' && isImageValid) {
// // //         return false;
// // //       }
// // //       return true;
// // //     });

// // //     const results = await Promise.all(filteredPlatforms.map(async (platform) => {
// // //       if (platform.requiresImage && !isImageValid) {
// // //         return {
// // //           platform: platform.id,
// // //           success: false,
// // //           error: 'Image URL is required for this platform.'
// // //         };
// // //       }

// // //       setPostingStatus(prev => ({ ...prev, [platform.id]: 'Posting...' }));

// // //       try {
// // //         const bodyPayload = platform.requiresImage
// // //           ? { image_url: imageUrl, caption }
// // //           : { caption };

// // //         const response = await fetch(`http://localhost:5000${platform.endpoint}`, {
// // //           method: 'POST',
// // //           headers: { 'Content-Type': 'application/json' },
// // //           body: JSON.stringify(bodyPayload),
// // //         });

// // //         const data = await response.json();

// // //         return {
// // //           platform: platform.id,
// // //           success: data.success,
// // //           error: data.error
// // //         };
// // //       } catch (error) {
// // //         return {
// // //           platform: platform.id,
// // //           success: false,
// // //           error: `Error posting to ${platform.name}`
// // //         };
// // //       }
// // //     }));

// // //     const newStatuses = {};
// // //     results.forEach(result => {
// // //       if (result.success) {
// // //         newStatuses[result.platform] = '✅ Posted successfully!';
// // //       } else {
// // //         newStatuses[result.platform] = `❌ ${result.error}`;
// // //       }
// // //     });
// // //     setPostingStatus(newStatuses);

// // //     const successCount = results.filter(r => r.success).length;
// // //     const totalCount = results.length;

// // //     if (successCount === totalCount && totalCount > 0) {
// // //       setAllPlatformsStatus('✅ Successfully posted to all applicable platforms!');
// // //     } else if (successCount > 0) {
// // //       setAllPlatformsStatus(`⚠️ Posted to ${successCount}/${totalCount} platforms`);
// // //     } else {
// // //       setAllPlatformsStatus('❌ Failed to post to all applicable platforms');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
// // //       <div className="max-w-4xl mx-auto">
// // //         {/* Header */}
// // //         <div className="text-center mb-8">
// // //           <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
// // //             Social Media Dashboard
// // //           </h1>
// // //           <p className="text-slate-600 text-lg">Create once, post everywhere</p>
// // //         </div>

// // //         {/* Content Creator Section */}
// // //         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20 mb-8">
// // //           <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
// // //             <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white">
// // //               <Image size={24} />
// // //             </div>
// // //             <span>Create Your Post</span>
// // //           </h2>

// // //           <div className="space-y-6">
// // //             {/* Image URL Input */}
// // //             <div className="space-y-2">
// // //               <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
// // //                 <Image size={16} />
// // //                 <span>Image URL</span>
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Paste your image URL here..."
// // //                 className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
// // //                 value={imageUrl}
// // //                 onChange={(e) => setImageUrl(e.target.value)}
// // //               />
// // //             </div>

// // //             {/* Image Preview */}
// // //             {isImageValid && (
// // //               <div className="space-y-2">
// // //                 <label className="text-sm font-medium text-slate-700">Preview</label>
// // //                 <div className="border-2 border-dashed border-slate-200 rounded-xl p-4">
// // //                   <img 
// // //                     src={imageUrl} 
// // //                     alt="Preview" 
// // //                     className="max-w-full h-48 object-cover rounded-lg mx-auto"
// // //                     onError={(e) => {
// // //                       e.target.style.display = 'none';
// // //                     }}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Caption Input */}
// // //             <div className="space-y-2">
// // //               <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
// // //                 <MessageCircle size={16} />
// // //                 <span>Caption</span>
// // //               </label>
// // //               <textarea
// // //                 placeholder="Write your caption here... #hashtags #socialmedia"
// // //                 className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none resize-none"
// // //                 rows="4"
// // //                 value={caption}
// // //                 onChange={(e) => setCaption(e.target.value)}
// // //               />
// // //               <div className="text-right text-sm text-slate-500">
// // //                 {caption.length} characters
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Platform Selection & Posting */}
// // //         {isCaptionValid ? (
// // //           <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20 mb-8">
// // //             <h2 className="text-2xl font-bold text-slate-800 mb-6">Choose Your Platforms</h2>
            
// // //             {/* Post to All Button */}
// // //             <div className="mb-8">
// // //               <button
// // //                 onClick={handlePostToAll}
// // //                 className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
// // //               >
// // //                 <Zap size={20} />
// // //                 <span>Post to All Platforms</span>
// // //               </button>
              
// // //               {allPlatformsStatus && (
// // //                 <div className={`mt-4 p-4 rounded-xl text-center font-medium ${
// // //                   allPlatformsStatus.includes('✅') 
// // //                     ? 'bg-green-50 text-green-700 border border-green-200' 
// // //                     : allPlatformsStatus.includes('❌')
// // //                     ? 'bg-red-50 text-red-700 border border-red-200'
// // //                     : allPlatformsStatus.includes('⚠️')
// // //                     ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
// // //                     : 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                 }`}>
// // //                   {allPlatformsStatus}
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <div className="text-center text-slate-500 mb-6">
// // //               <span>Or post to individual platforms</span>
// // //             </div>

// // //             {/* Individual Platform Buttons */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {platforms.map((platform) => {
// // //                 const IconComponent = platform.icon;
// // //                 const platformStatus = postingStatus[platform.id];
// // //                 const disabled = 
// // //                   (platform.requiresImage && !isImageValid) ||
// // //                   (platform.id === 'youtube' && isImageValid);

// // //                 return (
// // //                   <div key={platform.id} className="space-y-3">
// // //                     <button
// // //                       onClick={() => handleSinglePost(platform)}
// // //                       disabled={disabled}
// // //                       className={`w-full bg-gradient-to-br ${platform.color} text-white p-6 rounded-xl font-semibold text-lg transition-all duration-300 transform flex items-center justify-center space-x-3
// // //                         ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none' : 'hover:scale-[1.02] shadow-lg hover:shadow-xl'}
// // //                       `}
// // //                     >
// // //                       <IconComponent size={24} />
// // //                       <span>Post to {platform.name}</span>
// // //                       <Send size={18} />
// // //                     </button>

// // //                     {platform.id === 'youtube' && isImageValid && (
// // //                       <p className="text-xs text-yellow-600 text-center">YouTube does not support image-only posts</p>
// // //                     )}

// // //                     {platformStatus && (
// // //                       <div className={`p-3 rounded-lg text-center text-sm font-medium ${
// // //                         platformStatus.includes('✅') 
// // //                           ? 'bg-green-50 text-green-700 border border-green-200' 
// // //                           : platformStatus.includes('❌')
// // //                           ? 'bg-red-50 text-red-700 border border-red-200'
// // //                           : 'bg-blue-50 text-blue-700 border border-blue-200'
// // //                       }`}>
// // //                         {platformStatus}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
// // //             <p className="text-blue-700 font-medium">
// // //               Please add a caption to see posting options
// // //             </p>
// // //           </div>
// // //         )}

// // //         {/* Footer */}
// // //         <div className="text-center mt-8 text-slate-500">
// // //           <p>Streamline your social media presence across all platforms</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




















// import React, { useState ,useRef,useEffect} from 'react';
// import { Instagram, Facebook, Youtube, Twitter, Image, Video, MessageCircle, Send, Zap, Upload, X } from 'lucide-react';

// export default function SocialMediaDashboard() {
//   const [mediaType, setMediaType] = useState('image'); // 'image' or 'video'
//   const [mediaUrl, setMediaUrl] = useState('');
//   const [mediaFile, setMediaFile] = useState(null); // For file uploads
//   const [mediaSource, setMediaSource] = useState('url'); // 'url' or 'file'
//   const [caption, setCaption] = useState('');
//   const [postingStatus, setPostingStatus] = useState({});
//   const [allPlatformsStatus, setAllPlatformsStatus] = useState('');
//   const [focusedField, setFocusedField] = useState('');
//   const [hoveredPlatform, setHoveredPlatform] = useState('');
//   const statusTimers = useRef({});

//   // Platform config with both endpoints
//   const platforms = [
//     { 
//       id: 'instagram', 
//       name: 'Instagram', 
//       icon: Instagram, 
//       color: 'from-purple-500 to-pink-500',
//       hoverColor: 'from-purple-600 to-pink-600',
//       endpoints: {
//         image: '/api/instagram/post',
//         video: '/api/instagram/postvideo'
//       },
//       requiresImage: mediaType === 'image',
//       requiresVideo: mediaType === 'video',
//     },
//     { 
//       id: 'facebook', 
//       name: 'Facebook', 
//       icon: Facebook, 
//       color: 'from-blue-600 to-blue-700',
//       hoverColor: 'from-blue-700 to-blue-800',
//       endpoints: {
//         image: '/api/facebook/post',
//         video: '/api/facebook/postvideo'
//       },
//       requiresImage: mediaType === 'image',
//       requiresVideo: mediaType === 'video',
//     },
//     { 
//       id: 'twitter', 
//       name: 'Twitter', 
//       icon: Twitter, 
//       color: 'from-sky-400 to-blue-500',
//       hoverColor: 'from-sky-500 to-blue-600',
//       endpoints: {
//         image: '/api/twitter/post',
//         video: '/api/twitter/postvideo'
//       },
//       requiresImage: mediaType === 'image',
//       requiresVideo: mediaType === 'video',
//     },
//     { 
//       id: 'youtube', 
//       name: 'YouTube', 
//       icon: Youtube, 
//       color: 'from-red-500 to-red-600',
//       hoverColor: 'from-red-600 to-red-700',
//       endpoints: {
//         image: null, // YouTube does not allow image posts
//         video: '/api/youtube/postvideo'
//       },
//       requiresImage: false,
//       requiresVideo: mediaType === 'video',
//     }
//   ];

//   const isCaptionValid = caption.trim().length > 0;
//   const isMediaValid = mediaSource === 'url' ? mediaUrl.trim().length > 0 : mediaFile !== null;

//   // Disable posting if YouTube + image selected or missing required media
//   const isPostDisabledForPlatform = (platform) => {
//     if (!isCaptionValid) return true;

//     if (mediaType === 'image') {
//       if (!isMediaValid) return true;
//       if (platform.id === 'youtube') return true; // YouTube no image posts
//     } else if (mediaType === 'video') {
//       if (!isMediaValid) return true;
//       if (!platform.endpoints.video) return true; // no video endpoint means no video post
//     }

//     return false;
//   };

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setMediaFile(file);
//       // Clear URL when file is selected
//       setMediaUrl('');
//     }
//   };

//   const clearFile = () => {
//     setMediaFile(null);
//     // Reset file input
//     const fileInput = document.getElementById('mediaFileInput');
//     if (fileInput) fileInput.value = '';
//   };

//   const resetMediaAndCaption = () => {
//     setCaption('');
//     setMediaUrl('');
//     setMediaFile(null);
//     // Reset file input
//     const fileInput = document.getElementById('mediaFileInput');
//     if (fileInput) fileInput.value = '';
//   };

// //   const handleMediaTypeChange = (type) => {
// //     setMediaType(type);
// //     setMediaUrl('');
// //     setMediaFile(null);
// //     setPostingStatus({});
// //     setAllPlatformsStatus('');
// //     // Reset file input
// //     const fileInput = document.getElementById('mediaFileInput');
// //     if (fileInput) fileInput.value = '';
// //   };

// const handleMediaTypeChange = (type) => {
//     setMediaType(type);
//     setMediaSource('');
//     setMediaUrl('');
//     setMediaFile(null);
//     setPostingStatus({});
//     setAllPlatformsStatus('');
//     const fileInput = document.getElementById('mediaFileInput');
//     if (fileInput) fileInput.value = '';
//   };


//   const setStatusWithTimeout = (platformId, statusText) => {
//     setPostingStatus(prev => ({
//       ...prev,
//       [platformId]: statusText,
//     }));

//     if (
//       statusText !== 'Posting...' &&
//       !statusText.startsWith('Posting')
//     ) {
//       if (statusTimers.current[platformId]) {
//         clearTimeout(statusTimers.current[platformId]);
//       }
//       statusTimers.current[platformId] = setTimeout(() => {
//         setPostingStatus(prev => {
//           const newStatus = { ...prev };
//           delete newStatus[platformId];
//           return newStatus;
//         });
//       }, 3000);
//     }
//   };

//   // <<-- NEW: Helper to clear all-platforms status after 3s if not "Posting..."
//   const setAllPlatformsStatusWithTimeout = (statusText) => {
//     setAllPlatformsStatus(statusText);

//     if (
//       statusText !== 'Posting to all platforms...' &&
//       !statusText.startsWith('Posting')
//     ) {
//       if (statusTimers.current['all']) {
//         clearTimeout(statusTimers.current['all']);
//       }
//       statusTimers.current['all'] = setTimeout(() => {
//         setAllPlatformsStatus('');
//       }, 3000);
//     }
// };

// //   const handleSinglePost = async (platform) => {
// //     if (isPostDisabledForPlatform(platform)) return;

// //     setPostingStatus(prev => ({ ...prev, [platform.id]: 'Posting...' }));

// //     try {
// //       const endpoint = mediaType === 'image'
// //         ? platform.endpoints.image
// //         : platform.endpoints.video;

// //       if (!endpoint) {
// //         setPostingStatus(prev => ({ ...prev, [platform.id]: `❌ Posting not supported for this media type.` }));
// //         return;
// //       }

// //       let bodyPayload;
// //       let requestOptions = {
// //         method: 'POST',
// //       };

// //       if (mediaSource === 'file' && mediaFile) {
// //         // Use FormData for file uploads
// //         const formData = new FormData();
// //         formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
// //         formData.append('caption', caption);
        
// //         requestOptions.body = formData;
// //       } else {
// //         // Use JSON for URL uploads
// //         bodyPayload = mediaType === 'image'
// //           ? { image_url: mediaUrl, caption }
// //           : { video_url: mediaUrl, caption };
        
// //         requestOptions.headers = { 'Content-Type': 'application/json' };
// //         requestOptions.body = JSON.stringify(bodyPayload);
// //       }

// //       const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
// //       const data = await response.json();

// //       if (data.success) {
// //         setPostingStatus(prev => ({ 
// //           ...prev, 
// //           [platform.id]: '✅ Posted successfully!' 
// //         }));
// //       } else {
// //         setPostingStatus(prev => ({ 
// //           ...prev, 
// //           [platform.id]: `❌ Failed: ${data.error || 'Unknown error'}` 
// //         }));
// //       }
// //     } catch (error) {
// //       setPostingStatus(prev => ({ 
// //         ...prev, 
// //         [platform.id]: `❌ Error posting to ${platform.name}` 
// //       }));
// //     }
// //   };

// //   const handlePostToAll = async () => {
// //     if (!isCaptionValid || !isMediaValid) return;

// //     setAllPlatformsStatus('Posting to all platforms...');
// //     setPostingStatus({});

// //     const filteredPlatforms = platforms.filter(platform => {
// //       if (mediaType === 'image' && platform.id === 'youtube') {
// //         return false; // no image posts for YouTube
// //       }
// //       if (mediaType === 'video' && !platform.endpoints.video) {
// //         return false; // no video endpoint means skip
// //       }
// //       return true;
// //     });

// //     const results = await Promise.all(filteredPlatforms.map(async (platform) => {
// //       setPostingStatus(prev => ({ ...prev, [platform.id]: 'Posting...' }));

// //       try {
// //         const endpoint = mediaType === 'image' ? platform.endpoints.image : platform.endpoints.video;
// //         if (!endpoint) {
// //           return {
// //             platform: platform.id,
// //             success: false,
// //             error: 'Posting not supported for this media type.'
// //           };
// //         }

// //         let requestOptions = {
// //           method: 'POST',
// //         };

// //         if (mediaSource === 'file' && mediaFile) {
// //           // Use FormData for file uploads
// //           const formData = new FormData();
// //           formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
// //           formData.append('caption', caption);
          
// //           requestOptions.body = formData;
// //         } else {
// //           // Use JSON for URL uploads
// //           const bodyPayload = mediaType === 'image'
// //             ? { image_url: mediaUrl, caption }
// //             : { video_url: mediaUrl, caption };
          
// //           requestOptions.headers = { 'Content-Type': 'application/json' };
// //           requestOptions.body = JSON.stringify(bodyPayload);
// //         }

// //         const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
// //         const data = await response.json();

// //         return {
// //           platform: platform.id,
// //           success: data.success,
// //           error: data.error
// //         };
// //       } catch (error) {
// //         return {
// //           platform: platform.id,
// //           success: false,
// //           error: `Error posting to ${platform.name}`
// //         };
// //       }
// //     }));

// //     const newStatuses = {};
// //     results.forEach(result => {
// //       if (result.success) {
// //         newStatuses[result.platform] = '✅ Posted successfully!';
// //       } else {
// //         newStatuses[result.platform] = `❌ ${result.error}`;
// //       }
// //     });
// //     setPostingStatus(newStatuses);

// //     const successCount = results.filter(r => r.success).length;
// //     const totalCount = results.length;

// //     if (successCount === totalCount && totalCount > 0) {
// //       setAllPlatformsStatus('✅ Successfully posted to all applicable platforms!');
// //     } else if (successCount > 0) {
// //       setAllPlatformsStatus(`⚠️ Posted to ${successCount}/${totalCount} platforms`);
// //     } else {
// //       setAllPlatformsStatus('❌ Failed to post to all applicable platforms');
// //     }
// //   };



// const handleSinglePost = async (platform) => {
//     if (isPostDisabledForPlatform(platform)) return;

//     setStatusWithTimeout(platform.id, 'Posting...');

//     try {
//       const endpoint = mediaType === 'image'
//         ? platform.endpoints.image
//         : platform.endpoints.video;

//       if (!endpoint) {
//         setStatusWithTimeout(platform.id, `❌ Posting not supported for this media type.`);
//         return;
//       }

//       let bodyPayload;
//       let requestOptions = {
//         method: 'POST',
//       };

//       if (mediaSource === 'file' && mediaFile) {
//         const formData = new FormData();
//         formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
//         formData.append('caption', caption);
//         requestOptions.body = formData;
//       } else {
//         bodyPayload = mediaType === 'image'
//           ? { image_url: mediaUrl, caption }
//           : { video_url: mediaUrl, caption };
//         requestOptions.headers = { 'Content-Type': 'application/json' };
//         requestOptions.body = JSON.stringify(bodyPayload);
//       }

//       const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
//       const data = await response.json();

//       if (data.success) {
//         setStatusWithTimeout(platform.id, '✅ Posted successfully!');
//         resetMediaAndCaption();
//       } else {
//         setStatusWithTimeout(platform.id, `❌ Failed: ${data.error || 'Unknown error'}`);
//       }
//     } catch (error) {
//       setStatusWithTimeout(platform.id, `❌ Error posting to ${platform.name}`);
//     }
//   };

//   // <<-- MODIFIED: use setStatusWithTimeout for each platform, and setAllPlatformsStatusWithTimeout
//   const handlePostToAll = async () => {
//     if (!isCaptionValid || !isMediaValid) return;

//     setAllPlatformsStatusWithTimeout('Posting to all platforms...');
//     setPostingStatus({});

//     const filteredPlatforms = platforms.filter(platform => {
//       if (mediaType === 'image' && platform.id === 'youtube') {
//         return false;
//       }
//       if (mediaType === 'video' && !platform.endpoints.video) {
//         return false;
//       }
//       return true;
//     });

//     const results = await Promise.all(filteredPlatforms.map(async (platform) => {
//       setStatusWithTimeout(platform.id, 'Posting...');

//       try {
//         const endpoint = mediaType === 'image' ? platform.endpoints.image : platform.endpoints.video;
//         if (!endpoint) {
//           return {
//             platform: platform.id,
//             success: false,
//             error: 'Posting not supported for this media type.'
//           };
//         }

//         let requestOptions = {
//           method: 'POST',
//         };

//         if (mediaSource === 'file' && mediaFile) {
//           const formData = new FormData();
//           formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
//           formData.append('caption', caption);
//           requestOptions.body = formData;
//         } else {
//           const bodyPayload = mediaType === 'image'
//             ? { image_url: mediaUrl, caption }
//             : { video_url: mediaUrl, caption };
//           requestOptions.headers = { 'Content-Type': 'application/json' };
//           requestOptions.body = JSON.stringify(bodyPayload);
//         }

//         const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
//         const data = await response.json();

//         return {
//           platform: platform.id,
//           success: data.success,
//           error: data.error
//         };
//       } catch (error) {
//         return {
//           platform: platform.id,
//           success: false,
//           error: `Error posting to ${platform.name}`
//         };
//       }
//     }));

//     const newStatuses = {};
//     results.forEach(result => {
//       if (result.success) {
//         setStatusWithTimeout(result.platform, '✅ Posted successfully!');
//         resetMediaAndCaption();
//       } else {
//         setStatusWithTimeout(result.platform, `❌ ${result.error}`);
//       }
//     });

//     const successCount = results.filter(r => r.success).length;
//     const totalCount = results.length;

//     if (successCount === totalCount && totalCount > 0) {
//       setAllPlatformsStatusWithTimeout('✅ Successfully posted to all applicable platforms!');
//     } else if (successCount > 0) {
//       setAllPlatformsStatusWithTimeout(`⚠️ Posted to ${successCount}/${totalCount} platforms`);
//     } else {
//       setAllPlatformsStatusWithTimeout('❌ Failed to post to all applicable platforms');
//     }
//   };


//   useEffect(() => {
//     return () => {
//       Object.values(statusTimers.current).forEach(clearTimeout);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 transition-all duration-700">
//       <div className="max-w-4xl mx-auto">

//         {/* Animated Header */}
//         <div className="text-center mb-8 animate-pulse">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//             Social Media Dashboard
//           </h1>
//           <p className="text-slate-600">Share your content across all platforms instantly</p>
//         </div>

//         {/* Media Type Selector with Enhanced Interactivity */}
//         <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
//           <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">Choose Content Type</h3>
//           <div className="flex items-center justify-center space-x-8">
//             <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
//               mediaType === 'image' ? 'bg-gradient-to-r from-purple-100 to-pink-100 shadow-md' : 'hover:bg-slate-50'
//             }`}>
//               <input 
//                 type="radio" 
//                 name="mediaType" 
//                 value="image" 
//                 checked={mediaType === 'image'} 
//                 onChange={() => handleMediaTypeChange('image')}
//                 className="w-5 h-5 text-purple-600"
//               />
//               <Image size={20} className={mediaType === 'image' ? 'text-purple-600' : 'text-slate-500'} />
//               <span className={`font-medium ${mediaType === 'image' ? 'text-purple-700' : 'text-slate-700'}`}>Image</span>
//             </label>
//             <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
//               mediaType === 'video' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 shadow-md' : 'hover:bg-slate-50'
//             }`}>
//               <input 
//                 type="radio" 
//                 name="mediaType" 
//                 value="video" 
//                 checked={mediaType === 'video'} 
//                 onChange={() => handleMediaTypeChange('video')}
//                 className="w-5 h-5 text-blue-600"
//               />
//               <Video size={20} className={mediaType === 'video' ? 'text-blue-600' : 'text-slate-500'} />
//               <span className={`font-medium ${mediaType === 'video' ? 'text-blue-700' : 'text-slate-700'}`}>Video</span>
//             </label>
//           </div>
//         </div>

//         {/* Media Source Selector */}
//         <div className="mb-6 bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
//           <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">Choose {mediaType} Source</h3>
//           <div className="flex items-center justify-center space-x-8">
//             <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
//               mediaSource === 'url' ? 'bg-gradient-to-r from-green-100 to-emerald-100 shadow-md' : 'hover:bg-slate-50'
//             }`}>
//               <input 
//                 type="radio" 
//                 name="mediaSource" 
//                 value="url" 
//                 checked={mediaSource === 'url'} 
//                 onChange={() => {
//                   setMediaSource('url');
//                   setMediaFile(null);
//                   const fileInput = document.getElementById('mediaFileInput');
//                   if (fileInput) fileInput.value = '';
//                 }}
//                 className="w-5 h-5 text-green-600"
//               />
//               <span className={`font-medium ${mediaSource === 'url' ? 'text-green-700' : 'text-slate-700'}`}>URL Link</span>
//             </label>
//             <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
//               mediaSource === 'file' ? 'bg-gradient-to-r from-orange-100 to-amber-100 shadow-md' : 'hover:bg-slate-50'
//             }`}>
//               <input 
//                 type="radio" 
//                 name="mediaSource" 
//                 value="file" 
//                 checked={mediaSource === 'file'} 
//                 onChange={() => {
//                   setMediaSource('file');
//                   setMediaUrl('');
//                 }}
//                 className="w-5 h-5 text-orange-600"
//               />
//               <Upload size={20} className={mediaSource === 'file' ? 'text-orange-600' : 'text-slate-500'} />
//               <span className={`font-medium ${mediaSource === 'file' ? 'text-orange-700' : 'text-slate-700'}`}>Upload File</span>
//             </label>
//           </div>
//         </div>

//         {/* Media Input based on source type */}
//         {mediaSource === 'url' ? (
//           <div className="mb-8">
//             <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
//               {mediaType === 'image' ? 
//                 <Image size={16} className={focusedField === 'media' ? 'text-purple-600' : 'text-slate-500'} /> : 
//                 <Video size={16} className={focusedField === 'media' ? 'text-blue-600' : 'text-slate-500'} />
//               }
//               <span>{mediaType === 'image' ? 'Image URL' : 'Video URL'}</span>
//             </label>
//             <input
//               type="text"
//               placeholder={mediaType === 'image' ? 'Paste your image URL here...' : 'Paste your video URL here...'}
//               className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 outline-none transform ${
//                 focusedField === 'media' 
//                   ? `border-${mediaType === 'image' ? 'purple' : 'blue'}-500 ring-4 ring-${mediaType === 'image' ? 'purple' : 'blue'}-200 scale-[1.02]` 
//                   : 'border-slate-200 hover:border-slate-300'
//               }`}
//               value={mediaUrl}
//               onChange={(e) => setMediaUrl(e.target.value)}
//               onFocus={() => setFocusedField('media')}
//               onBlur={() => setFocusedField('')}
//             />
//           </div>
//         ) : (
//           <div className="mb-8">
//             <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
//               <Upload size={16} className="text-orange-600" />
//               <span>Upload {mediaType === 'image' ? 'Image' : 'Video'} File</span>
//             </label>
            
//             <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white hover:border-orange-400 transition-all duration-300">
//               {!mediaFile ? (
//                 <div className="text-center">
//                   <Upload size={48} className="mx-auto text-slate-400 mb-4" />
//                   <p className="text-slate-600 mb-4">
//                     Choose a {mediaType} file to upload
//                   </p>
//                   <input
//                     id="mediaFileInput"
//                     type="file"
//                     accept={mediaType === 'image' ? 'image/*' : 'video/*'}
//                     onChange={handleFileSelect}
//                     className="hidden"
//                   />
//                   <label
//                     htmlFor="mediaFileInput"
//                     className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
//                   >
//                     <Upload size={20} />
//                     <span>Select {mediaType} File</span>
//                   </label>
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
//                   <div className="flex items-center space-x-3">
//                     {mediaType === 'image' ? <Image size={20} className="text-purple-600" /> : <Video size={20} className="text-blue-600" />}
//                     <div>
//                       <p className="font-medium text-slate-700">{mediaFile.name}</p>
//                       <p className="text-sm text-slate-500">{(mediaFile.size / 1024 / 1024).toFixed(2)} MB</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={clearFile}
//                     className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Enhanced Preview with Animations */}
//         {mediaType === 'image' && mediaSource === 'url' && mediaUrl.trim().length > 0 && (
//           <div className="mb-8 space-y-3 animate-fadeIn">
//             <label className="text-sm font-medium text-slate-700">Preview</label>
//             <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-purple-300 transition-all duration-300">
//               <img 
//                 src={mediaUrl} 
//                 alt="Preview" 
//                 className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//                 onError={(e) => e.target.style.display = 'none'}
//               />
//             </div>
//           </div>
//         )}

//         {mediaType === 'image' && mediaSource === 'file' && mediaFile && (
//           <div className="mb-8 space-y-3 animate-fadeIn">
//             <label className="text-sm font-medium text-slate-700">Preview</label>
//             <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-purple-300 transition-all duration-300">
//               <img 
//                 src={URL.createObjectURL(mediaFile)} 
//                 alt="Preview" 
//                 className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               />
//             </div>
//           </div>
//         )}

//         {mediaType === 'video' && mediaSource === 'url' && mediaUrl.trim().length > 0 && (
//           <div className="mb-8 space-y-3 animate-fadeIn">
//             <label className="text-sm font-medium text-slate-700">Preview</label>
//             <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-blue-300 transition-all duration-300">
//               <video controls className="max-w-full h-48 rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
//                 <source src={mediaUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         )}

//         {mediaType === 'video' && mediaSource === 'file' && mediaFile && (
//           <div className="mb-8 space-y-3 animate-fadeIn">
//             <label className="text-sm font-medium text-slate-700">Preview</label>
//             <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-blue-300 transition-all duration-300">
//               <video controls className="max-w-full h-48 rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
//                 <source src={URL.createObjectURL(mediaFile)} type={mediaFile.type} />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         )}

//         {/* Caption Input with Character Counter Animation */}
//         <div className="mb-8">
//           <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
//             <MessageCircle size={16} className={focusedField === 'caption' ? 'text-green-600' : 'text-slate-500'} />
//             <span>Caption</span>
//           </label>
//           <div className="relative">
//             <textarea
//               placeholder="Write your caption here... #hashtags #socialmedia"
//               className={`w-full px-4 py-3 border-2 rounded-xl resize-none transition-all duration-300 outline-none transform ${
//                 focusedField === 'caption' 
//                   ? 'border-green-500 ring-4 ring-green-200 scale-[1.02]' 
//                   : 'border-slate-200 hover:border-slate-300'
//               }`}
//               rows="4"
//               value={caption}
//               onChange={(e) => setCaption(e.target.value)}
//               onFocus={() => setFocusedField('caption')}
//               onBlur={() => setFocusedField('')}
//             />
//             <div className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full transition-all duration-300 ${
//               caption.length > 250 ? 'bg-red-100 text-red-700' :
//               caption.length > 150 ? 'bg-yellow-100 text-yellow-700' :
//               'bg-green-100 text-green-700'
//             }`}>
//               {caption.length} chars
//             </div>
//           </div>
//         </div>

//         {/* Platform Posting Buttons with Enhanced Interactions */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20 mb-8 animate-slideUp">
//           <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Choose Your Platforms</h2>

//           {/* Post to All Button with Pulse Effect */}
//           <div className="mb-8">
//             <button
//               onClick={handlePostToAll}
//               disabled={!isCaptionValid || !isMediaValid}
//               className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform flex items-center justify-center space-x-2 shadow-lg ${
//                 (!isCaptionValid || !isMediaValid) 
//                   ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg' 
//                   : 'hover:from-emerald-600 hover:to-teal-600 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl'
//               }`}
//               onMouseEnter={() => setHoveredPlatform('all')}
//               onMouseLeave={() => setHoveredPlatform('')}
//             >
//               <Zap size={20} className={hoveredPlatform === 'all' && isCaptionValid && isMediaValid ? 'animate-bounce' : ''} />
//               <span>Post to All Platforms</span>
//             </button>

//             {allPlatformsStatus && (
//               <div className={`mt-4 p-4 rounded-xl text-center font-medium animate-fadeIn transition-all duration-500 ${
//                 allPlatformsStatus.includes('✅') 
//                   ? 'bg-green-50 text-green-700 border border-green-200 shadow-green-100 shadow-lg' 
//                   : allPlatformsStatus.includes('❌')
//                   ? 'bg-red-50 text-red-700 border border-red-200 shadow-red-100 shadow-lg'
//                   : allPlatformsStatus.includes('⚠️')
//                   ? 'bg-yellow-50 text-yellow-700 border border-yellow-200 shadow-yellow-100 shadow-lg'
//                   : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-blue-100 shadow-lg'
//               }`}>
//                 {allPlatformsStatus}
//               </div>
//             )}
//           </div>

//           <div className="text-center text-slate-500 mb-6 relative">
//             <span className="bg-white px-4 relative z-10">Or post to individual platforms</span>
//             <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {platforms.map((platform, index) => {
//               const IconComponent = platform.icon;
//               const platformStatus = postingStatus[platform.id];
//               const disabled = isPostDisabledForPlatform(platform);

//               return (
//                 <div 
//                   key={platform.id} 
//                   className="space-y-3 animate-slideUp"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <button
//                     onClick={() => handleSinglePost(platform)}
//                     disabled={disabled}
//                     onMouseEnter={() => setHoveredPlatform(platform.id)}
//                     onMouseLeave={() => setHoveredPlatform('')}
//                     className={`w-full bg-gradient-to-br ${
//                       hoveredPlatform === platform.id ? platform.hoverColor : platform.color
//                     } text-white p-6 rounded-xl font-semibold text-lg transition-all duration-300 transform flex items-center justify-center space-x-3 relative overflow-hidden
//                       ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none' : 'hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-[0.98]'}
//                     `}
//                   >
//                     <IconComponent size={24} className={hoveredPlatform === platform.id ? 'animate-pulse' : ''} />
//                     <span>Post to {platform.name}</span>
//                     <Send size={18} className={hoveredPlatform === platform.id ? 'animate-bounce' : ''} />
                    
//                     {/* Ripple effect overlay */}
//                     {hoveredPlatform === platform.id && !disabled && (
//                       <div className="absolute inset-0 bg-white/20 animate-ping rounded-xl"></div>
//                     )}
//                   </button>

//                   {mediaType === 'image' && platform.id === 'youtube' && (
//                     <p className="text-xs text-yellow-600 text-center animate-pulse">YouTube does not support image-only posts</p>
//                   )}

//                   {platformStatus && (
//                     <div className={`p-3 rounded-lg text-center text-sm font-medium animate-bounceIn transition-all duration-500 ${
//                       platformStatus.includes('✅') 
//                         ? 'bg-green-50 text-green-700 border border-green-200 shadow-green-100 shadow-md' 
//                         : platformStatus.includes('❌')
//                         ? 'bg-red-50 text-red-700 border border-red-200 shadow-red-100 shadow-md'
//                         : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-blue-100 shadow-md'
//                     }`}>
//                       {platformStatus}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Facebook, Youtube, Twitter, Image, Video, MessageCircle, Send, Zap, Upload, X } from 'lucide-react';

export default function SocialMediaDashboard() {
  const [mediaType, setMediaType] = useState(''); // '' until user selects
  const [mediaSource, setMediaSource] = useState(''); // '' until user selects
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [postingStatus, setPostingStatus] = useState({});
  const [allPlatformsStatus, setAllPlatformsStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const [hoveredPlatform, setHoveredPlatform] = useState('');
  const statusTimers = useRef({});

  const platforms = [
    { 
      id: 'instagram', 
      name: 'Instagram', 
      icon: Instagram, 
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'from-purple-600 to-pink-600',
      endpoints: {
        image: '/api/instagram/post',
        video: '/api/instagram/postvideo'
      },
      requiresImage: mediaType === 'image',
      requiresVideo: mediaType === 'video',
    },
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'from-blue-700 to-blue-800',
      endpoints: {
        image: '/api/facebook/post',
        video: '/api/facebook/postvideo'
      },
      requiresImage: mediaType === 'image',
      requiresVideo: mediaType === 'video',
    },
    { 
      id: 'twitter', 
      name: 'Twitter', 
      icon: Twitter, 
      color: 'from-sky-400 to-blue-500',
      hoverColor: 'from-sky-500 to-blue-600',
      endpoints: {
        image: '/api/twitter/post',
        video: '/api/twitter/postvideo'
      },
      requiresImage: mediaType === 'image',
      requiresVideo: mediaType === 'video',
    },
    { 
      id: 'youtube', 
      name: 'YouTube', 
      icon: Youtube, 
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700',
      endpoints: {
        image: null,
        video: '/api/youtube/postvideo'
      },
      requiresImage: false,
      requiresVideo: mediaType === 'video',
    }
  ];

  const isCaptionValid = caption.trim().length > 0;
  const isMediaValid = mediaSource === 'url' ? mediaUrl.trim().length > 0 : mediaFile !== null;

  const isPostDisabledForPlatform = (platform) => {
    if (!isCaptionValid) return true;
    if (!mediaType) return true;
    if (!mediaSource) return true;

    if (mediaType === 'image') {
      if (!isMediaValid) return true;
      if (platform.id === 'youtube') return true;
    } else if (mediaType === 'video') {
      if (!isMediaValid) return true;
      if (!platform.endpoints.video) return true;
    }
    return false;
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMediaFile(file);
      setMediaUrl('');
    }
  };

  const clearFile = () => {
    setMediaFile(null);
    const fileInput = document.getElementById('mediaFileInput');
    if (fileInput) fileInput.value = '';
  };

  const resetMediaAndCaption = () => {
    setCaption('');
    setMediaUrl('');
    setMediaFile(null);
    setMediaSource('');
    const fileInput = document.getElementById('mediaFileInput');
    if (fileInput) fileInput.value = '';
  };

  const handleMediaTypeChange = (type) => {
    setMediaType(type);
    setMediaSource('');
    setMediaUrl('');
    setMediaFile(null);
    setPostingStatus({});
    setAllPlatformsStatus('');
    const fileInput = document.getElementById('mediaFileInput');
    if (fileInput) fileInput.value = '';
  };

  const setStatusWithTimeout = (platformId, statusText) => {
    setPostingStatus(prev => ({
      ...prev,
      [platformId]: statusText,
    }));

    if (
      statusText !== 'Posting...' &&
      !statusText.startsWith('Posting')
    ) {
      if (statusTimers.current[platformId]) {
        clearTimeout(statusTimers.current[platformId]);
      }
      statusTimers.current[platformId] = setTimeout(() => {
        setPostingStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[platformId];
          return newStatus;
        });
      }, 3000);
    }
  };

  const setAllPlatformsStatusWithTimeout = (statusText) => {
    setAllPlatformsStatus(statusText);
    if (
      statusText !== 'Posting to all platforms...' &&
      !statusText.startsWith('Posting')
    ) {
      if (statusTimers.current['all']) {
        clearTimeout(statusTimers.current['all']);
      }
      statusTimers.current['all'] = setTimeout(() => {
        setAllPlatformsStatus('');
      }, 5000);
    }
  };

//   const handleSinglePost = async (platform) => {
//     if (isPostDisabledForPlatform(platform)) return;

//     setStatusWithTimeout(platform.id, 'Posting...');

//     try {
//       const endpoint = mediaType === 'image'
//         ? platform.endpoints.image
//         : platform.endpoints.video;

//       if (!endpoint) {
//         setStatusWithTimeout(platform.id, `❌ Posting not supported for this media type.`);
//         return;
//       }

//       let bodyPayload;
//       let requestOptions = {
//         method: 'POST',
//       };

//       if (mediaSource === 'file' && mediaFile) {
//         const formData = new FormData();
//         formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
//         formData.append('caption', caption);
//         requestOptions.body = formData;
//       } else {
//         bodyPayload = mediaType === 'image'
//           ? { image_url: mediaUrl, caption }
//           : { video_url: mediaUrl, caption };
//         requestOptions.headers = { 'Content-Type': 'application/json' };
//         requestOptions.body = JSON.stringify(bodyPayload);
//       }

//       const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
//       const data = await response.json();

//       if (data.success) {
//         setStatusWithTimeout(platform.id, '✅ Posted successfully!');
//         resetMediaAndCaption();
//       } else {
//         setStatusWithTimeout(platform.id, `❌ Failed: ${data.error || 'Unknown error'}`);
//       }
//     } catch (error) {
//       setStatusWithTimeout(platform.id, `❌ Error posting to ${platform.name}`);
//     }
//   };

//   const handlePostToAll = async () => {
//     if (!isCaptionValid || !isMediaValid) return;

//     setAllPlatformsStatusWithTimeout('Posting to all platforms...');
//     setPostingStatus({});

//     const filteredPlatforms = platforms.filter(platform => {
//       if (mediaType === 'image' && platform.id === 'youtube') {
//         return false;
//       }
//       if (mediaType === 'video' && !platform.endpoints.video) {
//         return false;
//       }
//       return true;
//     });

//     const results = await Promise.all(filteredPlatforms.map(async (platform) => {
//       setStatusWithTimeout(platform.id, 'Posting...');

//       try {
//         const endpoint = mediaType === 'image' ? platform.endpoints.image : platform.endpoints.video;
//         if (!endpoint) {
//           return {
//             platform: platform.id,
//             success: false,
//             error: 'Posting not supported for this media type.'
//           };
//         }

//         let requestOptions = {
//           method: 'POST',
//         };

//         if (mediaSource === 'file' && mediaFile) {
//           const formData = new FormData();
//           formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
//           formData.append('caption', caption);
//           requestOptions.body = formData;
//         } else {
//           const bodyPayload = mediaType === 'image'
//             ? { image_url: mediaUrl, caption }
//             : { video_url: mediaUrl, caption };
//           requestOptions.headers = { 'Content-Type': 'application/json' };
//           requestOptions.body = JSON.stringify(bodyPayload);
//         }

//         const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
//         const data = await response.json();

//         return {
//           platform: platform.id,
//           success: data.success,
//           error: data.error
//         };
//       } catch (error) {
//         return {
//           platform: platform.id,
//           success: false,
//           error: `Error posting to ${platform.name}`
//         };
//       }
//     }));

//     const newStatuses = {};
//     results.forEach(result => {
//       if (result.success) {
//         setStatusWithTimeout(result.platform, '✅ Posted successfully!');
//         resetMediaAndCaption();
//       } else {
//         setStatusWithTimeout(result.platform, `❌ ${result.error}`);
//       }
//     });

//     const successCount = results.filter(r => r.success).length;
//     const totalCount = results.length;

//     if (successCount === totalCount && totalCount > 0) {
//       setAllPlatformsStatusWithTimeout('✅ Successfully posted to all applicable platforms!');
//     } else if (successCount > 0) {
//       setAllPlatformsStatusWithTimeout(`⚠️ Posted to ${successCount}/${totalCount} platforms`);
//     } else {
//       setAllPlatformsStatusWithTimeout('❌ Failed to post to all applicable platforms');
//     }
//   };



const handleSinglePost = async (platform) => {
    if (isPostDisabledForPlatform(platform)) return;
  
    setStatusWithTimeout(platform.id, 'Posting...');
  
    try {
      const endpoint = mediaType === 'image'
        ? platform.endpoints.image
        : platform.endpoints.video;
  
      if (!endpoint) {
        setStatusWithTimeout(platform.id, `❌ Posting not supported for this media type.`);
        return;
      }
  
      let requestOptions = { method: 'POST' };
  
      if (mediaSource === 'file' && mediaFile) {
        const formData = new FormData();
        formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
        formData.append('caption', caption);
        requestOptions.body = formData;
      } else {
        const bodyPayload = mediaType === 'image'
          ? { image_url: mediaUrl, caption }
          : { video_url: mediaUrl, caption };
        requestOptions.headers = { 'Content-Type': 'application/json' };
        requestOptions.body = JSON.stringify(bodyPayload);
      }
  
      const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
     console.log("response status",response.status)
      if (response.status === 429) {
        setStatusWithTimeout(platform.id, '⚠️ You hit the rate limit. Please wait before retrying.');
        return;
      }
  
      const data = await response.json();
  
      if (data.success) {
        setStatusWithTimeout(platform.id, '✅ Posted successfully!');
        resetMediaAndCaption();
      } else {
        setStatusWithTimeout(platform.id, `❌ Failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setStatusWithTimeout(platform.id, `❌ Error posting to ${platform.name}`);
    }
  };
  
  const handlePostToAll = async () => {
    if (!isCaptionValid || !isMediaValid) return;
  
    setAllPlatformsStatusWithTimeout('Posting to all platforms...');
    setPostingStatus({});
  
    const filteredPlatforms = platforms.filter(platform => {
      if (mediaType === 'image' && platform.id === 'youtube') {
        return false;
      }
      if (mediaType === 'video' && !platform.endpoints.video) {
        return false;
      }
      return true;
    });
  
    const results = await Promise.all(filteredPlatforms.map(async (platform) => {
      setStatusWithTimeout(platform.id, 'Posting...');
  
      try {
        const endpoint = mediaType === 'image' ? platform.endpoints.image : platform.endpoints.video;
        if (!endpoint) {
          return {
            platform: platform.id,
            success: false,
            error: 'Posting not supported for this media type.'
          };
        }
  
        let requestOptions = { method: 'POST' };
  
        if (mediaSource === 'file' && mediaFile) {
          const formData = new FormData();
          formData.append(mediaType === 'image' ? 'image' : 'video', mediaFile);
          formData.append('caption', caption);
          requestOptions.body = formData;
        } else {
          const bodyPayload = mediaType === 'image'
            ? { image_url: mediaUrl, caption }
            : { video_url: mediaUrl, caption };
          requestOptions.headers = { 'Content-Type': 'application/json' };
          requestOptions.body = JSON.stringify(bodyPayload);
        }
  
        const response = await fetch(`http://localhost:5000${endpoint}`, requestOptions);
  
        if (response.status === 429) {
          return {
            platform: platform.id,
            success: false,
            error: 'You hit the rate limit. Please wait before retrying.'
          };
        }
  
        const data = await response.json();
  
        return {
          platform: platform.id,
          success: data.success,
          error: data.error
        };
      } catch (error) {
        return {
          platform: platform.id,
          success: false,
          error: `Error posting to ${platform.name}`
        };
      }
    }));
  
    results.forEach(result => {
      if (result.success) {
        setStatusWithTimeout(result.platform, '✅ Posted successfully!');
        resetMediaAndCaption();
      } else {
        setStatusWithTimeout(result.platform, `❌ ${result.error}`);
      }
    });
  
    const successCount = results.filter(r => r.success).length;
    const totalCount = results.length;
  
    if (successCount === totalCount && totalCount > 0) {
      setAllPlatformsStatusWithTimeout('✅ Successfully posted to all applicable platforms!');
    } else if (successCount > 0) {
      setAllPlatformsStatusWithTimeout(`⚠️ Posted to ${successCount}/${totalCount} platforms`);
    } else {
      setAllPlatformsStatusWithTimeout('❌ Failed to post to all applicable platforms');
    }
  };
  

  useEffect(() => {
    return () => {
      Object.values(statusTimers.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 transition-all duration-700">
      <div className="max-w-4xl mx-auto">

        {/* Animated Header */}
        <div className="text-center mb-8 animate-pulse">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600">Share your content across all platforms instantly</p>
        </div>

        {/* Media Type Selector */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">Choose Content Type</h3>
          <div className="flex items-center justify-center space-x-8">
            <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              mediaType === 'image' ? 'bg-gradient-to-r from-purple-100 to-pink-100 shadow-md' : 'hover:bg-slate-50'
            }`}>
              <input 
                type="radio" 
                name="mediaType" 
                value="image" 
                checked={mediaType === 'image'} 
                onChange={() => handleMediaTypeChange('image')}
                className="w-5 h-5 text-purple-600"
              />
              <Image size={20} className={mediaType === 'image' ? 'text-purple-600' : 'text-slate-500'} />
              <span className={`font-medium ${mediaType === 'image' ? 'text-purple-700' : 'text-slate-700'}`}>Image</span>
            </label>
            <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              mediaType === 'video' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 shadow-md' : 'hover:bg-slate-50'
            }`}>
              <input 
                type="radio" 
                name="mediaType" 
                value="video" 
                checked={mediaType === 'video'} 
                onChange={() => handleMediaTypeChange('video')}
                className="w-5 h-5 text-blue-600"
              />
              <Video size={20} className={mediaType === 'video' ? 'text-blue-600' : 'text-slate-500'} />
              <span className={`font-medium ${mediaType === 'video' ? 'text-blue-700' : 'text-slate-700'}`}>Video</span>
            </label>
          </div>
        </div>

        {/* Show Media Source Selector only after mediaType is selected */}
        {mediaType && (
          <div className="mb-6 bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">Choose {mediaType} Source</h3>
            <div className="flex items-center justify-center space-x-8">
              <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                mediaSource === 'url' ? 'bg-gradient-to-r from-green-100 to-emerald-100 shadow-md' : 'hover:bg-slate-50'
              }`}>
                <input 
                  type="radio" 
                  name="mediaSource" 
                  value="url" 
                  checked={mediaSource === 'url'} 
                  onChange={() => {
                    setMediaSource('url');
                    setMediaFile(null);
                    const fileInput = document.getElementById('mediaFileInput');
                    if (fileInput) fileInput.value = '';
                  }}
                  className="w-5 h-5 text-green-600"
                />
                <span className={`font-medium ${mediaSource === 'url' ? 'text-green-700' : 'text-slate-700'}`}>URL Link</span>
              </label>
              <label className={`flex items-center space-x-3 cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                mediaSource === 'file' ? 'bg-gradient-to-r from-orange-100 to-amber-100 shadow-md' : 'hover:bg-slate-50'
              }`}>
                <input 
                  type="radio" 
                  name="mediaSource" 
                  value="file" 
                  checked={mediaSource === 'file'} 
                  onChange={() => {
                    setMediaSource('file');
                    setMediaUrl('');
                  }}
                  className="w-5 h-5 text-orange-600"
                />
                <Upload size={20} className={mediaSource === 'file' ? 'text-orange-600' : 'text-slate-500'} />
                <span className={`font-medium ${mediaSource === 'file' ? 'text-orange-700' : 'text-slate-700'}`}>Upload File</span>
              </label>
            </div>
          </div>
        )}

        {/* Only show media input after source is selected */}
        {mediaType && mediaSource === 'url' && (
          <div className="mb-8">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
              {mediaType === 'image' ? 
                <Image size={16} className={focusedField === 'media' ? 'text-purple-600' : 'text-slate-500'} /> : 
                <Video size={16} className={focusedField === 'media' ? 'text-blue-600' : 'text-slate-500'} />
              }
              <span>{mediaType === 'image' ? 'Image URL' : 'Video URL'}</span>
            </label>
            <input
              type="text"
              placeholder={mediaType === 'image' ? 'Paste your image URL here...' : 'Paste your video URL here...'}
              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 outline-none transform ${
                focusedField === 'media' 
                  ? `border-${mediaType === 'image' ? 'purple' : 'blue'}-500 ring-4 ring-${mediaType === 'image' ? 'purple' : 'blue'}-200 scale-[1.02]` 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              onFocus={() => setFocusedField('media')}
              onBlur={() => setFocusedField('')}
            />
          </div>
        )}

        {mediaType && mediaSource === 'file' && (
          <div className="mb-8">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
              <Upload size={16} className="text-orange-600" />
              <span>Upload {mediaType === 'image' ? 'Image' : 'Video'} File</span>
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white hover:border-orange-400 transition-all duration-300">
              {!mediaFile ? (
                <div className="text-center">
                  <Upload size={48} className="mx-auto text-slate-400 mb-4" />
                  <p className="text-slate-600 mb-4">
                    Choose a {mediaType} file to upload
                  </p>
                  <input
                    id="mediaFileInput"
                    type="file"
                    accept={mediaType === 'image' ? 'image/*' : 'video/*'}
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <label
                    htmlFor="mediaFileInput"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Upload size={20} />
                    <span>Select {mediaType} File</span>
                  </label>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    {mediaType === 'image' ? <Image size={20} className="text-purple-600" /> : <Video size={20} className="text-blue-600" />}
                    <div>
                      <p className="font-medium text-slate-700">{mediaFile.name}</p>
                      <p className="text-sm text-slate-500">{(mediaFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button
                    onClick={clearFile}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Preview */}
        {mediaType === 'image' && mediaSource === 'url' && mediaUrl.trim().length > 0 && (
          <div className="mb-8 space-y-3 animate-fadeIn">
            <label className="text-sm font-medium text-slate-700">Preview</label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-purple-300 transition-all duration-300">
              <img 
                src={mediaUrl} 
                alt="Preview" 
                className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        )}

        {mediaType === 'image' && mediaSource === 'file' && mediaFile && (
          <div className="mb-8 space-y-3 animate-fadeIn">
            <label className="text-sm font-medium text-slate-700">Preview</label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-purple-300 transition-all duration-300">
              <img 
                src={URL.createObjectURL(mediaFile)} 
                alt="Preview" 
                className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        )}

        {mediaType === 'video' && mediaSource === 'url' && mediaUrl.trim().length > 0 && (
          <div className="mb-8 space-y-3 animate-fadeIn">
            <label className="text-sm font-medium text-slate-700">Preview</label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-blue-300 transition-all duration-300">
              <video controls className="max-w-full h-48 rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                <source src={mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {mediaType === 'video' && mediaSource === 'file' && mediaFile && (
          <div className="mb-8 space-y-3 animate-fadeIn">
            <label className="text-sm font-medium text-slate-700">Preview</label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-gradient-to-br from-slate-50 to-white hover:border-blue-300 transition-all duration-300">
              <video controls className="max-w-full h-48 rounded-lg mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                <source src={URL.createObjectURL(mediaFile)} type={mediaFile.type} />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Caption Input */}
        <div className="mb-8">
          <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
            <MessageCircle size={16} className={focusedField === 'caption' ? 'text-green-600' : 'text-slate-500'} />
            <span>Caption</span>
          </label>
          <div className="relative">
            <textarea
              placeholder="Write your caption here... #hashtags #socialmedia"
              className={`w-full px-4 py-3 border-2 rounded-xl resize-none transition-all duration-300 outline-none transform ${
                focusedField === 'caption' 
                  ? 'border-green-500 ring-4 ring-green-200 scale-[1.02]' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              rows="4"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              onFocus={() => setFocusedField('caption')}
              onBlur={() => setFocusedField('')}
            />
            <div className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full transition-all duration-300 ${
              caption.length > 250 ? 'bg-red-100 text-red-700' :
              caption.length > 150 ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {caption.length} chars
            </div>
          </div>
        </div>

        {/* Platform Posting Buttons */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20 mb-8 animate-slideUp">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Choose Your Platforms</h2>

          {/* Post to All Button */}
          <div className="mb-8">
            <button
              onClick={handlePostToAll}
              disabled={!isCaptionValid || !isMediaValid}
              className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform flex items-center justify-center space-x-2 shadow-lg ${
                (!isCaptionValid || !isMediaValid) 
                  ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg' 
                  : 'hover:from-emerald-600 hover:to-teal-600 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredPlatform('all')}
              onMouseLeave={() => setHoveredPlatform('')}
            >
              <Zap size={20} className={hoveredPlatform === 'all' && isCaptionValid && isMediaValid ? 'animate-bounce' : ''} />
              <span>Post to All Platforms</span>
            </button>

            {allPlatformsStatus && (
              <div className={`mt-4 p-4 rounded-xl text-center font-medium animate-fadeIn transition-all duration-500 ${
                allPlatformsStatus.includes('✅') 
                  ? 'bg-green-50 text-green-700 border border-green-200 shadow-green-100 shadow-lg' 
                  : allPlatformsStatus.includes('❌')
                  ? 'bg-red-50 text-red-700 border border-red-200 shadow-red-100 shadow-lg'
                  : allPlatformsStatus.includes('⚠️')
                  ? 'bg-yellow-50 text-yellow-700 border border-yellow-200 shadow-yellow-100 shadow-lg'
                  : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-blue-100 shadow-lg'
              }`}>
                {allPlatformsStatus}
              </div>
            )}
          </div>

          <div className="text-center text-slate-500 mb-6 relative">
            <span className="bg-white px-4 relative z-10">Or post to individual platforms</span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              const platformStatus = postingStatus[platform.id];
              const disabled = isPostDisabledForPlatform(platform);

              return (
                <div 
                  key={platform.id} 
                  className="space-y-3 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => handleSinglePost(platform)}
                    disabled={disabled}
                    onMouseEnter={() => setHoveredPlatform(platform.id)}
                    onMouseLeave={() => setHoveredPlatform('')}
                    className={`w-full bg-gradient-to-br ${
                      hoveredPlatform === platform.id ? platform.hoverColor : platform.color
                    } text-white p-6 rounded-xl font-semibold text-lg transition-all duration-300 transform flex items-center justify-center space-x-3 relative overflow-hidden
                      ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none' : 'hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-[0.98]'}
                    `}
                  >
                    <IconComponent size={24} className={hoveredPlatform === platform.id ? 'animate-pulse' : ''} />
                    <span>Post to {platform.name}</span>
                    <Send size={18} className={hoveredPlatform === platform.id ? 'animate-bounce' : ''} />
                    
                    {/* Ripple effect overlay */}
                    {hoveredPlatform === platform.id && !disabled && (
                      <div className="absolute inset-0 bg-white/20 animate-ping rounded-xl"></div>
                    )}
                  </button>

                  {mediaType === 'image' && platform.id === 'youtube' && (
                    <p className="text-xs text-yellow-600 text-center animate-pulse">YouTube does not support image-only posts</p>
                  )}

                  {platformStatus && (
                    <div className={`p-3 rounded-lg text-center text-sm font-medium animate-bounceIn transition-all duration-500 ${
                      platformStatus.includes('✅') 
                        ? 'bg-green-50 text-green-700 border border-green-200 shadow-green-100 shadow-md' 
                        : platformStatus.includes('❌')
                        ? 'bg-red-50 text-red-700 border border-red-200 shadow-red-100 shadow-md'
                        : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-blue-100 shadow-md'
                    }`}>
                      {platformStatus}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}