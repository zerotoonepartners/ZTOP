
import './cardpost.scss';

function CardPosts({posts}){
    console.log(posts);
            return (
                <>
            <div className="cardPagenatorContainer">
                { posts.length===0? 
                <div className="NewsPagenatorBox">
                    <div className="NewsPagenatorNo">
                        <span>0</span>
                    </div>
                    <div className="NewsPagenatorTitle">
                        <span>게시된 글이 없습니다.</span>
                    </div>
                    <div className="NewsPagenatorWriter">
                        <span>관리자</span>
                    </div>
                    <div className="NewsPagenatorStamp">
                        <span>2000-00-00</span>
                    </div>
                </div>  
                
                :
                
                posts.map((post,idx)=>(
                  <div key={post.id} className="cardPagenatorBox">
                        <div className="cardPagenatorImgBox">
                            <img src={post.picture_1}/>
                        </div>
                        <div className="cardPagenatorContentBox">
                            <div className="cardPagenatorTitle">
                                <span>{post.title}</span>
                            </div>
                            <div className="cardPagenatorStamp">
                                <span>{post.created_at.slice(0,10)}</span>
                        </div>
                    </div>
              </div>
                ))}
            </div>
              </>
              );
  
};
export default CardPosts;
