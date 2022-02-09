import { DownOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { FilterDropdownMenu } from './FilterDropdownMenu' 


export const FilterDropdown = (props) => {
    const menus = props.data.menu

    return (
        <Content className='theme--sikshya'>
            <Space size={"middle"}>
                <Dropdown placement='bottomRight' overlay={<FilterDropdownMenu data={menus} />}>
                    <Button className='button button--round text text--primary' {...props}>
                        {(props.type === "sort") ? <FilterOutlined style={{ marginRight: 10 }} /> : ""}{props.data.title} {(props.type === "sort") ? "" : <DownOutlined />}
                    </Button>
                </Dropdown>
            </Space>
        </Content>
    )
}

export default FilterDropdown