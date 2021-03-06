<template>
  <a-modal
    title="添加学员"
    :visible="visible"
    @cancel="handleCancel"
  >
  <!-- Tip: Form表单使用组件FormModel更合适，请大家使用FormModel来做表单开发 -->
    <a-form
      :form="form"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
    >
      <a-form-item label="学员" extra="只能添加系统中已经注册的用户">
        <a-input
          v-decorator="['name', { rules: [
            { required: true, message: '请输入学员' },
            { validator: validatorName }
          ]}]"
          placeholder="邮箱／手机／用户名"
        />
      </a-form-item>

      <a-form-item v-if="multiClass.course.price" label="购买价格" :extra="`本课程的价格为 ${multiClass.course.price} 元`">
        <a-input
          type="text"
          v-decorator="['price',
          {
            initialValue: multiClass.course.price,
            rules: [
              { validator: validatorPrice },
              { validator: maxPrice }
            ]
          }]"
          suffix="元"
        />
      </a-form-item>

      <a-form-item label="备注" extra="选填">
        <a-input
          v-decorator="['remark']"
        />
      </a-form-item>
    </a-form>

    <template slot="footer">
      <a-button key="back" @click="handleCancel">
        取消
      </a-button>
      <a-button key="submit" type="primary" @click="handleSubmit">
        确认
      </a-button>
    </template>
  </a-modal>
</template>

<script>
import _ from 'lodash';
import { CourseMemberCheck, MultiClassStudent } from 'common/vue/service';

export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    multiClass: {
      type: Object,
      required: true,
      default: {}
    }
  },

  data() {
    return {
      form: this.$form.createForm(this, { name: 'add_student' })
    };
  },

  methods: {
    handleCancel() {
      this.$emit('handle-cancel');
      this.form.resetFields();
    },
    async handleSubmit() {
      this.form.validateFields((err, values) => {
        console.log(err);
        if (!err) {
          MultiClassStudent.add({
            id: this.multiClass.id,
            userInfo: values.name,
            price: values.price,
            remark: values.remark,
          }).then((res) => {
            this.$message.success('学员添加成功！', 2);
            this.visible = false;
            window.location.reload();
          }).catch(err => {
            this.$message.warning('学员添加失败！', 2);
          });
        }
      });
    },

    validatorName: _.debounce(async function(rule, value, callback) {
      const { result, message } = await CourseMemberCheck.checkStudentName(
        this.multiClass ? this.multiClass.courseId : 0,
        {title: value}
        )

      if (!result) {
        this.form.setFields({
          name: { value, errors: [new Error(message)] }
        })
        return
      }

      callback();
    }, 300),

    validatorPrice(rule, value, callback) {
      /^[0-9]{0,8}(\.\d{0,2})?$/.test(value) ? callback() : callback(new Error(Translator.trans('validate.positive_currency.message')));
    },

    maxPrice(rule, value, callback) {
      (parseFloat(value) > this.multiClass.course.price) ? callback(new Error(Translator.trans('course_manage.student_create.price_max_error_hint'))) : callback();
    }
  }
}
</script>
