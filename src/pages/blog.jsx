import Footer from './../Components/footer';
export default function Blog() {
    const blogs = [
        { 
            'title': 'blog_01',
            'img': 'https://placehold.co/356x200',
            'admin': 'admin',
            'modal_img': 'https://bostami-bootstrap.ibthemespro.com/bostami-template/assets/img/blog/modal-img-1.jpg',
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam eum deserunt exercitationem qui obcaecati repellat laborum cupiditate, unde illum nam dolor animi similique placeat aut enim minima et corporis.'
        },
        { 
            'title': 'blog_02',
            'img': 'https://placehold.co/356x200',
            'admin': 'admin',
            'modal_img': 'https://bostami-bootstrap.ibthemespro.com/bostami-template/assets/img/blog/modal-img-1.jpg',
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam eum deserunt exercitationem qui obcaecati repellat laborum cupiditate, unde illum nam dolor animi similique placeat aut enim minima et corporis.'
        }
    ]
    return (
        <div className="wrapper bg-primary rounded w-90 mx-auto m-5">
            <section className="blog p-5">
                <div className="blog-title mb-lg-5 mb-md-4 mb-sm-3">
                    <h1 className="text-left mt-0 ps-5 mb-0 text-white text-decoration-underline">- Blogs -</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {blogs.map((blog,index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="blog-item text-center mb-lg-4 p-4 mb-md-3 mb-sm-3 bg-primary rounded-5">
                                    <div className="blog-item-img">
                                        <a href={`#blog-${index}`} data-bs-toggle="modal" aria-label='Blog Image' className="blog-img">
                                            <img src={blog.img} className='rounded-5 img-fluid img-thumbnail' width={356} height={200} alt={blog.title} />
                                        </a>
                                        <div className="modal modal-box fade" id={`blog-${index}`} tabIndex={-1} style={{"display": "none"}} aria-hidden="true">
                                            <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header border-bottom-none">
                                                        <button type="button"className='close bg-transparent rounded-circle text-white border border-1 border-white bottom-0' data-bs-dismiss="modal">
                                                            <i className="fa-solid fa-times"></i>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="modal-img">
                                                            <img src={blog.modal_img} alt={blog.title} className="rounded-5" />
                                                        </div>
                                                        <div className="blog-meta d-flex text-white">
                                                            <p className="date me-5">
                                                                <b>yyyy/dd/mm</b>
                                                            </p>
                                                            <p className="category">
                                                                <b>Category Name</b>
                                                            </p>
                                                        </div>
                                                        <div className="blog-title text-white mb-3 mt-3">
                                                            <h3 className='text-decoration-underline'>{blog.title}</h3>
                                                        </div>
                                                        <div className="blog-paragraph text-white text-left">
                                                            <p className="mb-0">
                                                                <b>{blog.content}</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-meta p-3 text-white d-lg-flex justify-content-between">
                                        <div className="blog-admin">
                                            <p className="mb-0">
                                                Wrote By
                                                <span className="ms-2 text-decoration-underline">{blog.admin}</span>
                                            </p>
                                        </div>
                                        <div className="blog-time">
                                            <p className="mb-0">yyyy/mm/dd</p>
                                        </div>
                                    </div>
                                    <div className="blog-title ps-3 text-center text-white">
                                        <a href={`#blog-${index}`} data-bs-toggle="modal" aria-label='Blog Title' className='text-decoration-none text-white' >
                                            <h2>{blog.title}</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

