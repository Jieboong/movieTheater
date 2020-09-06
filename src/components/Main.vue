<template>
    <div id='main'>
        <div class ="top">
        <router-link to='/' class="to__main" text-decoration:none>Main</router-link>
        <router-link to ='/Login' class="to__login">로그인</router-link>
        </div>
        <div class ="menu">
            <router-link class="to__movieList" to='/MovieList'>영화 조회</router-link>
            <router-link class="to__Ticketing" to='/Ticketing'>영화 예매</router-link>
            <router-link class="to__myMovie" to='/myMovie'>예매 내역 조회</router-link>
            <router-link class="to__myPage" to='/myPage'>마이페이지</router-link>
        </div>
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

// import movieList from './movieList'

export default {
    components : {
        // movieList
    }
}
</script>