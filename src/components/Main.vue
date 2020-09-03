<template>
    <div id='to'>
        <p id ="top">
        <router-link to='/' class="to__main" text-decoration:none>Main</router-link>
        <router-link to ='/Login' class="to__login">로그인</router-link>
        </p>
        <p id = "Menu">
        <router-link to='/MovieList' class='to__movieList'>영화 조회</router-link>
        <router-link to = '/Ticketing' class='to__ticketing'>영화 예매</router-link>
        <router-link to='/myMovie' class='to__myMovie'>예매 내역 조회</router-link>
        <router-link to = '/myPage' class='to__myPage'>마이페이지</router-link>
        </p>
        <router-view></router-view>
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