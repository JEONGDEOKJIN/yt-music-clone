import {create} from "zustand"


const useUIState = create(  (set) => ({
    homeCategory : "home",   // 기본값
    
    // 기본 이미지 경로 
    headerImageSrc : "https://images.unsplash.com/photo-1612999754243-3745bba6c302?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    // 값 변경 | setter 함수
    setHomeCategory : (value) => set({homeCategory: value}), // value 를 넘겨준다 -> 그러면, homeCategory 의 값을 value 로 지정한다. 
    setHeaderImageSrc : (src) => set({headerImageSrc : src}), 


})  )


export default useUIState;