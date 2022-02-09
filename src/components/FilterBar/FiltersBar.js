import { FilterFilled } from "@ant-design/icons"
import { Card, Space, Typography } from "antd"
import { Content } from "antd/lib/layout/layout"
import FilterDropdown from "../FilterDropdown/FilterDropdown"

const filters = [
    // {
    //     title: "Course Title",
    //     menu: ["Hello", "Cello", "Jello"]
    // },
    // {
    //     title: "Course Level",
    //     menu: ["Hello", "Cello", "Jello"]
    // },
    {
        title: "Category",
        menu: ["Hello", "Cello", "Jello"]
    },
    {
        title: "Price",
        menu: ["Hello", "Cello", "Jello"]
    },
]

export const FiltersBar = () => {
    return (
        <Content>
            <Card className="bg--gray shadow--around">
                <Space style={{ display: 'flex', justifyContent: 'space-between' }} size={'large'}>
                    <Typography.Text>
                        <Space>
                            <FilterFilled /><div>Filters</div>
                        </Space>
                    </Typography.Text>
                    <Space>
                        {
                            filters.map(data => {
                                return <Typography.Text>
                                    <FilterDropdown data={data} />
                                </Typography.Text>
                            })
                        }
                    </Space>
                </Space>
            </Card>
        </Content>
    )
}

export default FiltersBar