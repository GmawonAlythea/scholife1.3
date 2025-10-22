document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    const hotTopics = [
        'New library hours',
        'Upcoming midterm exams schedule',
        'Student government elections',
        'Scholarship application deadlines',
        'New student orientation feedback',
        'Campus coffee shop deals',
        'Volunteering opportunities',
        'Club recruitment week',
    ];

    const hotTopicsList = document.getElementById('hotTopicsList');
    if (hotTopicsList) {
        hotTopics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            hotTopicsList.appendChild(li);
        });
    }

    let posts = [
        {
            id: 1,
            author: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
            timestamp: '2 hours ago',
            content: 'Just attended the new student orientation. It was great to meet everyone and learn about the campus!',
            upvotes: 15,
            downvotes: 1,
            comments: [
                {
                    id: 1,
                    author: 'Jane Smith',
                    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                    text: 'Welcome to the campus!',
                    likes: 2,
                    replies: [],
                    reactions: { '👍': 1, '❤️': 1 }
                }
            ],
            voted: null,
        },
        {
            id: 2,
            author: 'Jane Smith',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
            timestamp: '5 hours ago',
            content: 'The library will be closed this weekend. Make sure to get your books before then!',
            upvotes: 25,
            downvotes: 0,
            comments: [],
            voted: null,
        },
    ];

    const postsContainer = document.querySelector('.posts-container');
    const createPostBtn = document.getElementById('createPostBtn');
    const createPostText = document.getElementById('createPostText');

    const renderPosts = () => {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.setAttribute('data-id', post.id);

            postCard.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar}" alt="User Avatar" class="user-avatar-small">
                    <div class="post-user-info">
                        <h4>${post.author}</h4>
                        <p>${post.timestamp}</p>
                    </div>
                </div>
                <div class="post-body">
                    <p>${post.content}</p>
                </div>
                <div class="post-actions">
                    <button class="upvote-btn ${post.voted === 'up' ? 'active' : ''}"><i class="fas fa-arrow-up"></i> <span>${post.upvotes}</span></button>
                    <button class="downvote-btn ${post.voted === 'down' ? 'active' : ''}"><i class="fas fa-arrow-down"></i> <span>${post.downvotes}</span></button>
                    <button class="comment-btn"><i class="fas fa-comment"></i> <span>${post.comments.length}</span></button>
                </div>
                <div class="comment-section" style="display: none;">
                    <div class="comment-input-container">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User Avatar" class="user-avatar-small">
                        <div class="comment-input">
                            <textarea placeholder="Write a comment..."></textarea>
                        </div>
                    </div>
                    <div class="comments-list"></div>
                </div>
            `;

            postsContainer.appendChild(postCard);
        });
    };

    const renderComments = (postCard, postId) => {
        const post = posts.find(p => p.id === postId);
        const commentsList = postCard.querySelector('.comments-list');
        commentsList.innerHTML = '';

        post.comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.setAttribute('data-id', comment.id);

            let reactionsHTML = '';
            if(comment.reactions){
                reactionsHTML = '<div class="comment-reactions">';
                for(const reaction in comment.reactions){
                    reactionsHTML += `<span>${reaction} ${comment.reactions[reaction]}</span>`;
                }
                reactionsHTML += '</div>';
            }

            commentDiv.innerHTML = `
                <img src="${comment.avatar}" alt="User Avatar" class="user-avatar-small">
                <div class="comment-content">
                    <div class="comment-author">${comment.author}</div>
                    <div class="comment-text">${comment.text}</div>
                    ${reactionsHTML}
                </div>
            `;

            const commentActions = document.createElement('div');
            commentActions.className = 'comment-actions';
            commentActions.innerHTML = `
                <button class="like-comment-btn">Like</button>
                <div class="reaction-popover">
                    <button class="reaction-btn">👍</button>
                    <button class="reaction-btn">❤️</button>
                    <button class="reaction-btn">😂</button>
                    <button class="reaction-btn">😯</button>
                    <button class="reaction-btn">😢</button>
                    <button class="reaction-btn">😡</button>
                </div>
                <button class="reply-comment-btn">Reply</button>
            `;

            const repliesDiv = document.createElement('div');
            repliesDiv.className = 'replies';

            comment.replies.forEach(reply => {
                const replyDiv = document.createElement('div');
                replyDiv.className = 'comment';
                replyDiv.innerHTML = `
                    <img src="${reply.avatar}" alt="User Avatar" class="user-avatar-small">
                    <div class="comment-content">
                        <div class="comment-author">${reply.author}</div>
                        <div class="comment-text">${reply.text}</div>
                    </div>
                `;
                repliesDiv.appendChild(replyDiv);
            });

            commentsList.appendChild(commentDiv);
            commentsList.appendChild(commentActions);
            commentsList.appendChild(repliesDiv);
        });
    };

    if (postsContainer) {
        renderPosts();

        createPostBtn.addEventListener('click', () => {
            const content = createPostText.value.trim();
            if (content) {
                const newPost = {
                    id: posts.length + 1,
                    author: 'Markarn Doe',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                    timestamp: 'Just now',
                    content: content,
                    upvotes: 0,
                    downvotes: 0,
                    comments: [],
                    voted: null,
                };
                posts.unshift(newPost);
                renderPosts();
                createPostText.value = '';
            }
        });

        createPostText.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                createPostBtn.click();
            }
        });

        postsContainer.addEventListener('click', e => {
            const target = e.target.closest('button');
            if (!target) return;

            const postCard = target.closest('.post-card');
            const postId = parseInt(postCard.dataset.id);
            const post = posts.find(p => p.id === postId);

            if (target.classList.contains('upvote-btn')) {
                if (post.voted === 'up') {
                    post.voted = null;
                    post.upvotes--;
                } else {
                    if (post.voted === 'down') {
                        post.downvotes--;
                    }
                    post.voted = 'up';
                    post.upvotes++;
                }
                renderPosts();
            } else if (target.classList.contains('downvote-btn')) {
                if (post.voted === 'down') {
                    post.voted = null;
                    post.downvotes--;
                } else {
                    if (post.voted === 'up') {
                        post.upvotes--;
                    }
                    post.voted = 'down';
                    post.downvotes++;
                }
                renderPosts();
            } else if (target.classList.contains('comment-btn')) {
                const commentSection = postCard.querySelector('.comment-section');
                commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
                if (commentSection.style.display === 'block') {
                    renderComments(postCard, postId);
                }
            } else if(target.classList.contains('reply-comment-btn')) {
                const commentActions = target.parentElement;
                const repliesDiv = commentActions.nextElementSibling;
                if(repliesDiv.querySelector('.comment-input-container')) return;
                const replyInput = document.createElement('div');
                replyInput.className = 'comment-input-container';
                replyInput.innerHTML = `
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User Avatar" class="user-avatar-small">
                    <div class="comment-input">
                        <textarea placeholder="Write a reply..."></textarea>
                    </div>
                `;
                repliesDiv.appendChild(replyInput);
            } else if(target.classList.contains('like-comment-btn')){
                const commentDiv = target.parentElement.previousElementSibling;
                const commentId = parseInt(commentDiv.dataset.id);
                const comment = post.comments.find(c => c.id === commentId);
                comment.likes++;
                renderComments(postCard, postId);
            } else if(target.classList.contains('reaction-btn')){
                const reaction = target.textContent;
                const commentDiv = target.parentElement.parentElement.previousElementSibling;
                const commentId = parseInt(commentDiv.dataset.id);
                const comment = post.comments.find(c => c.id === commentId);
                if(!comment.reactions) comment.reactions = {};
                if(!comment.reactions[reaction]) comment.reactions[reaction] = 0;
                comment.reactions[reaction]++;
                renderComments(postCard, postId);
            }
        });

        postsContainer.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey && e.target.matches('textarea')) {
                e.preventDefault();
                const postCard = e.target.closest('.post-card');
                const postId = parseInt(postCard.dataset.id);
                const post = posts.find(p => p.id === postId);

                if(e.target.parentElement.parentElement.classList.contains('comment-input-container')) {
                    if(e.target.parentElement.parentElement.parentElement.classList.contains('replies')){
                        const commentDiv = e.target.closest('.replies').previousElementSibling.previousElementSibling;
                        const commentId = parseInt(commentDiv.dataset.id);
                        const comment = post.comments.find(c => c.id === commentId);

                        const newReply = {
                            id: comment.replies.length + 1,
                            author: 'Markarn Doe',
                            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                            text: e.target.value,
                            likes: 0,
                            replies: [],
                        };
                        comment.replies.push(newReply);
                        renderComments(postCard, postId);
                        return;
                    }
                }


                const newComment = {
                    id: post.comments.length + 1,
                    author: 'Markarn Doe',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                    text: e.target.value,
                    likes: 0,
                    replies: [],
                };

                post.comments.push(newComment);
                renderComments(postCard, postId);
                e.target.value = '';
            }
        });
    }
});
