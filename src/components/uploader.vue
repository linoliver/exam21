<template>
  <div>
    <div class="camera" v-for="(item, index) in list" :key="index" @click="click(index)">
      <div class="camera_one">
        <img v-if="item.src" :src="item.src" alt>
        <img v-else class="add" :src="addImg">
        <p>{{item.desc}}</p>
      </div>
    </div>
    <div v-show="showMask" class="mask">
      <img :src="current.demo">
      <div>
        <button @click="upload(1)">拍照</button>
        <button @click="upload(2)">相册</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import add from "../assets/add.png";
import { uploadImg } from "../api/index.js";
export default {
    name: "upload",
  data() {
    return {
      current: {},
      showMask: false
    };
  },
  computed: {
    ...mapState({
      list: state => state.upload.list
    }),
    addImg() {
      return add;
    }
  },
  methods: {
    ...mapMutations({
      updataList: "upload/updataList"
    }),
    click(index) {
      this.current = this.list[index];
      this.showMask = true;
    },
    cancel() {
      this.showMask = false;
    },
   upload(type) {
       let res =  uploadImg(type);
        console.log('l',type)
        if(res.result == 1){
           console.log(1)
                this.updateList({
                    src:res.data.url,
                    index: this.list.findIndex(item=>item==this.current)
                })
                this.showMask=false;
            }else{
                alert("上传图片失败")
            }
      // uploadImg(type).then(res => {
      //   console.log(1)
      //   if (res.code == 0) {
      //       console.log(2)
      //     let src = "";
      //     if (/picture.eclicks.cn/.test(res.data.image01)) {
      //       src = res.data.image01.replace("http://", "//");
      //     } else {
      //       src = "//picture.eclicks.cn/" + res.data.image01;
      //     }
      //     this.updataList({
      //       src,
      //       index: this.list.findIndex(item => item == this.current)
      //     });
      //   } else {
      //     alert(res.msg);
      //   }
      // });
       console.log('res...', res);
    }
  }
};
</script>
  // <ul>
      
  //   <li v-for="(item, index) in list" :key="index" @click="click(index)">
      // <img v-if="item.src" :src="item.src" alt>
      //  <img v-else class="add" :src="addImg">
  
      // <p>{{item.desc}}</p>
  //   </li>
  //   <div v-show="showMask" class="mask">
  //     <img :src="current.demo">
  //     <div>
  //       <button @click="upload(1)">拍照</button>
  //       <button @click="upload(2)">相册</button>
  //      <button @click="cancel">取消</button>
  //     </div>
  //   </div>
  // </ul>
<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 0.15rem;
    width: 0.9rem;
    height: 0.7rem;
    border: 1px solid #c0c0c0;
  }
  p {
    font-size: 0.26rem;
    padding: 0.1rem 0.3rem;
    text-align: center;
  }
}
.add {
  width: 0.5rem;
  height: 0.5rem;
  padding: 0.1rem 0.2rem;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 90%;
    margin-top: 20%;
  }
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      height: 0.9rem;
      font-size: 0.4rem;
      letter-spacing: 0.1rem;
      border-radius: 0.15rem;
      color: #3aafc0;
    }
    button:first-child {
      border-radius: 0.15rem 0.15rem 0 0;
    }
    button:nth-child(2) {
      border-radius: 0 0 0.15rem 0.15rem;
    }
    button:last-child {
      margin: 0.15rem 0;
    }
  }
}
</style>

