/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BASE_URL } from "../../..";

import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import { useFetchIfUpdate, useInputs } from "../common/hooks";

// 수정을 위해 useEffect 사용하여 데이타를 가져와 state에 저장 -> input들에 반영.
// useEffect 내에서 조건문으로 수정이면 요청, 처음이면 리턴

export default function WriteFree() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let id = "",
    nickname = "",
    password = "",
    title = "",
    content = "";
  if (state) ({ id, nickname, password, title, content } = state);

  function submit(e) {
    // put or post
    e.preventDefault();
    const data = new FormData(e.target);
    let method = "post";
    if (state) {
      data.append("id", id);
      method = "put";
    }
    axios({
      method,
      url: "board",
      data,
    })
      .then(setTimeout(() => navigate("/community/free"), 1000))
      .catch((err) => console.log(err));
  }

  function handleChange(e) {}
  return (
    <div className="grid grid-cols-2 gap-4">
      <select className="nav-controller select col-span-2 h-16">
        <option defaultValue="">자유 게시판</option>
      </select>
      <form
        action={BASE_URL + "board"}
        method="post"
        encType="multipart/form-data"
        onSubmit={submit}
        className="col-span-2 grid grid-cols-2 gap-2 "
      >
        <input
          type="text"
          className="h-16 border border-slate-300 px-4 col-span-2"
          placeholder="제목을 입력해주세요"
          name="title"
          defaultValue={title}
          required
        />

        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          className="h-16 border border-slate-300"
          required
          defaultValue={nickname}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          className="h-16 border border-slate-300"
          required
          defaultValue={password}
        />
        <textarea
          cols="30"
          rows="10"
          className="border border-slate-300 col-span-2"
          name="content"
          placeholder="내용"
          required
          defaultValue={content}
        ></textarea>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name="file"
          className="col-span-2"
        />

        <button
          className="w-32 h-12 bg-32 text-white col-span-2 mx-auto"
          type="submit"
        >
          작성완료
        </button>
      </form>
    </div>
  );
}
