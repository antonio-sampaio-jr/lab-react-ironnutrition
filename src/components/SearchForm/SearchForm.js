import { Input, Space } from "antd";
const { Search } = Input;

function SearchForm({ search, setSearch }) {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Space direction="vertical">
        <Search
            placeholder="input search text"
            onSearch={handleChange}
            style={{
                width: 200,
            }}  />
        </Space>
        
    )
}

export default SearchForm