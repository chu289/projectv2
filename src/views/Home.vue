<template>
  <div class="home">
    <div class="wrap">
      <div class="header">
        <!-- <div class="header__menu">
          <img src="@/assets/menu.png" alt="" />
        </div> -->
        <div class="header__title">
          <h3>醫療好評網</h3>
        </div>
        <Popup
          class="searchDialog"
          :showDialog="showSearchDialog"
          :cancel="cancel"
        >
          <div class="content">
            <form>
              <i class="searchIcon"><img src="@/assets/search.png" alt="" /></i>
              <custom-select
                :class="[isOptionShow ? 'optionShow' : 'optionHide']"
                :optionShow="optionShow"
                :selectedValue="selectedValue"
                :optionList="optionList"
                :selectedOption="selectedOption"
                :placeholder="placeholderTxt"
              />
              <i class="down"><img src="@/assets/Stroke.png" alt="" /></i>
              <h3 class="temptxt">search</h3>
              <i class="placeIcon"><img src="@/assets/place.png" alt="" /></i>
            </form>
          </div>
        </Popup>
        <div class="header__search" @click="search__box">
          <div class="sub1">O</div>
          <div class="sub1__line"></div>
          <div class="sub2">PEN</div>
        </div>
        <a class="scroll__btn" href="#subtitle">
          <img src="@/assets/nextPage.png" alt="" />
        </a>
        <div class="header__subtitle" id="subtitle">
          <h3>醫療好評網</h3>
          <h4>給您的安心有保障的醫療評價資訊， <br />簡單明瞭、方便操作 。</h4>
        </div>
      </div>
    </div>
    <div class="content1">
      <div class="content1__title">
        <h3>你有這些困擾嗎?</h3>
      </div>
      <div class="content1__range range1">
        <div class="content1__box">
          <div class="content1_background">
            <img src="@/assets/Union.svg" alt="" />
          </div>
          <div class="content1__box__img">
            <img src="@/assets/thunder.png" alt="" />
          </div>
          <h3>臨時找醫院，<br />妳怕雷嗎?</h3>
        </div>
        <div class="content1__box">
          <div class="content1_background">
            <img src="@/assets/Union.svg" alt="" />
          </div>
          <div class="content1__box__img">
            <img src="@/assets/talk.png" alt="" />
          </div>
          <h3>道聽塗說是不是你<br />求醫的唯一參考?</h3>
        </div>
      </div>
      <div class="content1__range range2">
        <div class="content1__box">
          <div class="content1_background">
            <img src="@/assets/Union.svg" alt="" />
          </div>
          <div class="content1__box__img">
            <img src="@/assets/time.png" alt="" />
          </div>
          <h3>怕花太多時間尋找<br />妳心中的良醫嗎?</h3>
        </div>
        <div class="content1__box">
          <div class="content1_background">
            <img src="@/assets/Union.svg" alt="" />
          </div>
          <div class="content1__box__img">
            <img src="@/assets/layout.png" alt="" />
          </div>
          <h3>版面太雜，使用<br />起來霧煞煞嗎？</h3>
        </div>
      </div>
      <div class="content1__subbox">
             <div class="content1__subbox_background">
            <img src="@/assets/Rectangle 23.svg" alt="" />
          </div>
        <div class="content1__subbox__img">
          <img src="@/assets/trust.png" alt="" />
        </div>
        <h3>
          面對意外，<br />你需要的是快速精準的醫療資訊，<br />
          而不是片面之詞的傳言，<br />讓我們為你找到值得信賴的醫療機構。
        </h3>
      </div>
    </div>
    <div class="content2">
      <img src="@/assets/solotion.svg" alt="" />
    </div>
  </div>
</template>

<script>
import Popup from '@/components/Popup/index.vue'
import CustomSelect from '@/components/Select/index.vue'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showSearchDialog: false,
      selectValue: '',
      isOptionShow: false,
      selectedValue: '',
      optionList: ['科別', '醫院'],
      placeholderTxt: '請選擇',
      parmData: '',
    }
  },
  components: {
    Popup,
    CustomSelect,
  },
  methods: {
    ...mapActions(['searchType']),
    search__box() {
      this.showSearchDialog = true
    },
    cancel() {
      this.showSearchDialog = false
    },
    search(event) {
      this.searchType(event.target.value)
      this.$router.push('/search')
      this.showSearchDialog = false
    },
    selectedOption(value) {
      this.selectedValue = value
      this.isOptionShow = false
      this.placeholderTxt = ''
      if (value === '科別') {
        this.parmData = 'doctor'
      } else {
        this.parmData = 'hospital'
      }

      this.searchType(this.parmData)
      this.$router.push('/search')
      this.showSearchDialog = false
    },
    optionShow() {
      this.isOptionShow = this.isOptionShow ? false : true
    },
  },
}
</script>

<style type="text/css" src="@/assets/style.css"></style>
