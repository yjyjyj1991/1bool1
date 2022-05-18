package com.ssafy.db.repository;

import com.ssafy.db.entity.Convinence;
import com.ssafy.db.entity.Goods;
import com.ssafy.db.entity.goodsKakao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface GoodsRepository extends JpaRepository<Goods, Long> {
    List<Goods> findTop10ByOrderByUpdateDateDesc();

    List<Goods> findTop10ByOrderByHitDesc();

    @Query(value = "select * from goods as g where g.convinence = :convinenceName and g.event = :event", nativeQuery = true)
    List<Goods> findGoodsEventByConvinence(String convinenceName, Long event);

    List<Goods> findByNameContaining(String name);

    List<Goods> findByConvinenceContaining(String convienence);
    @Query(value = "SELECT g.convinence FROM goods g group BY(g.convinence)", nativeQuery = true)
    List<Convinence> findByNameSQL();

    List<Goods> findByConvinence(String convinence);

    List<Goods> findByConvinenceAndEvent(String convinence, int event);

    List<Goods> findByConvinenceAndEventAndNameContaining(String convinence, int event, String Name);

    List<Goods> findByConvinenceAndNameContaining(String convinence, String Name);

    List<Goods> findByEventAndNameContaining(int event, String Name);

    List<Goods> findByEvent(int event);

    @Query(value = "select photo_path from goods as g inner join (select goods_id from recipe_goods where recipe_id = :recipeId limit 1) as gr on g.id = gr.goods_id;\n", nativeQuery = true)
    goodsKakao findPhotopathKakao(Long recipeId);

//    List<Goods> findTop10ByOrderByLikeDesc();
//@Query(value = "select * from room as ru where ru.room_id IN ( select r.room_id from room_user as r where r.user_id = :userId )", nativeQuery = true)
//List<Room> searchUserHasRoom(Long userId);
}
