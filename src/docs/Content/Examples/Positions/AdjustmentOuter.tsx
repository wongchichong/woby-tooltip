import { Tooltip } from '../../../../lib'

export const AdjustmentOuter = () => <>
    <h3 class='w-[95%] mb-0'><strong>Outer positions</strong></h3>
    <div class="adjOuter">
        <div class='cursor-pointer w-[150px] h-[100px] relative text-sm flex items-center justify-center mt-20 rounded-[5px] border-2 border-solid border-[#4b4b4b] bg-[rgba(137,27,211,0.4)]'>
            <h3>Target element</h3>
            <Tooltip
                show
                arrowAlign="center"
                position="left center"
                textAlign="center"
                textboxWidth="120px"
                moveLeft="40px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveLeft
                    <br />
                    40px
                </span>
            </Tooltip>
            <Tooltip
                show
                arrowAlign="center"
                position="bottom center"
                textAlign="center"
                textboxWidth="120px"
                moveDown="40px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveDown
                    <br />
                    40px
                </span>
            </Tooltip>
            <Tooltip
                show
                arrowAlign="center"
                position="right center"
                textAlign="center"
                textboxWidth="120px"
                moveRight="40px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveRight
                    <br />
                    40px
                </span>
            </Tooltip>
            <Tooltip
                show
                arrowAlign="center"
                position="top center"
                textAlign="center"
                textboxWidth="120px"
                moveUp="40px"
                hoverBackground="bg-[#3b0586]"
                hoverColor="text-[white]"
            >
                <span>
                    moveUp
                    <br />
                    40px
                </span>
            </Tooltip>
        </div>
    </div>
</>
