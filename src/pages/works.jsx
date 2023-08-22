import Footer from './../Components/footer';
export default function ErrorPage() {
    const categories = [
        {
            "name": 'All Projects',
            "data_bs_target": '#pills_all',
            "id": "pills_all_tab",
            "aria_selected": "true",
            "aria_controls": "pills_all",
            "class": "nav-link active",
        },
        {
            "name": 'Ui Design',
            "data_bs_target": '#pills_ui_design',
            "id": "pills_ui_design_tab",
            "aria_selected": "true",
            "aria_controls": "pills_ui_design",
            "class": "nav-link"
        },
        {
            "name": "Ui Devlopment",
            "data_bs_target": '#pills_ui_dev',
            "id": "pills_ui_dev_tab",
            "aria_selected": "false",
            "aria_controls": "pills_ui_dev",
            "class": "nav-link"
        },
        {
            "name": 'FrontEnd',
            "data_bs_target": '#pills_frontend',
            "id": "pills_frontend_tab",
            "aria_selected": "false",
            "aria_controls": "pills_frontend",
            "class": "nav-link"
        },
        {
            "name": 'BackEnd',
            "data_bs_target": '#pills_backend',
            "id": "pills_backend_tab",
            "aria_selected": "false",
            "aria_controls": "pills_backend",
            "class": "nav-link"
        },
        {
            "name": "React.js",
            "data_bs_target": '#pills_react',
            "id": "pills_react_tab",
            "aria_selected": "false",
            "aria_controls": "pills_react",
            "class": "nav-link"
        },
        {
            "name": 'Next.js',
            "data_bs_target": '#pills_next',
            "id": "pills_next_tab",
            "aria_selected": "false",
            "aria_controls": "pills_next",
            "class": "nav-link"
        },
        {
            "name": 'Laravel',
            "data_bs_target": '#pills_laravel',
            "id": "pills_laravel_tab",
            "aria_selected": "false",
            "aria_controls": "pills_laravel",
            "class": "nav-link",
            
        }
    ]
    const tabPanes = [
        {
            "tab_pane_class": "show active",
            "tab_pane_id": "pills_all",
            "aria_labelledby": "pills_all_tab",
            "tap_pane_content": "All Projects"
        },
        {
            "tab_pane_id": "pills_ui_design",
            "aria_labelledby": "pills_ui_design_tab",
            "tap_pane_content": "UI Design Projects",
        },
        {
            "tab_pane_id": "pills_ui_dev",
            "aria_labelledby": "pills_ui_dev_tab",
            "tap_pane_content": "UI Development Project",
        },
        {
            "tab_pane_id": "pills_frontend",
            "aria_labelledby": "pills_frontend_tab",
            "tap_pane_content": "FrontEnd Development Projects",
        },
        {
            "tab_pane_id": "pills_backend",
            "aria_labelledby": "pills_backend_tab",
            "tap_pane_content": "BackEnd Development Projects",
        },
        {
            "tab_pane_id": "pills_react",
            "aria_labelledby": "pills_react_tab",
            "tap_pane_content": "React.js Projects",
        },
        {
            "tab_pane_id": "pills_next",
            "aria_labelledby": "pills_next_tab",
            "tap_pane_content": "Next.js Projects",
        },
        {
            "tab_pane_id": "pills_laravel",
            "aria_labelledby": "pills_laravel_tab",
            "tap_pane_content": "Laravel Projects",
        },
    ]
    return (
        <div className="wrapper w-90 bg-primary rounded mx-auto m-5">
            <section className="works p-5">
                <div className="work-title text-left ps-5 mt-0 mb-0 text-white">
                    <h1 className='text-decoration-underline'> - Portfolio - </h1>
                </div>
                <div className="work-content pt-4">
                    <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                        {categories.map((cat, index) => (
                            <>
                                <li className="nav-item me-3" key={index} role="presentation">
                                    <button className={`${cat.class}`} data-bs-target={cat.data_bs_target} id={cat.id} data-bs-toggle="pill" type="button" role="tab" aria-controls={cat.aria_controls} aria-selected={cat.aria_selected}>{cat.name}</button>
                                </li>
                            </>
                        ))}
                    </ul>
                    <div className="tab-content mt-5" id="pills-tabContent">
                        {tabPanes.map((tabPane, index) => (
                            <div className={`tab-pane p-5 text-center fade ${tabPane.tab_pane_class}`} id={tabPane.tab_pane_id} role="tabpanel" tabIndex="0" aria-labelledby={tabPane.aria_labelledby} key={index}>{tabPane.tap_pane_content}</div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}