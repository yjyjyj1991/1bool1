package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;

import javax.persistence.*;
import java.util.List;

/**
 * 유저 모델 정의.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class User extends BaseEntity{
    // 이메일
    @Column(name = "email", nullable = false)
    String email;

    // 유저 비밀번호
    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password", nullable = false)
    String password;

    // 유저 닉네임
    @Column(name = "nickname",nullable = false)
    String nickname;

    //탈퇴 여부
    @Column(name = "is_withdrawal")
    Integer isWithdrawal;


    @Builder
    public User(Long id, String email, String password, String nickname,Integer is_withdrawal){
        this.id = id;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.isWithdrawal = is_withdrawal;
    }
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "construction_id", nullable = false)
//    Construction construction;
    
}
