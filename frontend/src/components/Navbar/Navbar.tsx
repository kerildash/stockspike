import { type ChangeEvent, type FC, type KeyboardEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Search from "../Search/Search";
import { NavbarAuth } from "./NavbarAuth/NavbarAuth";

export const Navbar: FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const queryFromUrl = searchParams.get('q') ?? '';

    useEffect(() => {
        if (location.pathname === '/search') {
            setSearch(queryFromUrl);
        }
    }, [location.pathname, queryFromUrl]);

    const startSearch = () => {
        const term = search.trim();
        if (!term) {
            return;
        }
        navigate(`/search?q=${encodeURIComponent(term)}`);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            startSearch();
        }
    };

    return (
        <nav className="flex h-[var(--navbar-height)] items-center border-b border-gray-200 bg-white/70 backdrop-blur-sm backdrop-saturate-100">
            <div className="flex w-full min-w-0 items-center gap-3 px-3 sm:gap-6 sm:px-8">
                <Link
                    to="/"
                    className="shrink-0 text-xl font-bold text-slate-900 whitespace-nowrap"
                >
                    Stock<span className="text-blue-800">Spike</span>
                </Link>
                <div className="flex min-w-0 flex-1 justify-center">
                    <div className="w-full max-w-xl">
                        <Search
                            style="navbar"
                            search={search}
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            startSearch={startSearch}
                        />
                    </div>
                </div>
                <NavbarAuth />
            </div>
        </nav>
    );
}
