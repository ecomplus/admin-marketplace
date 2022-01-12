<template>
  <Application>
    <template #settings-append>
      <div id="collapse-settings" class="collapse show">
        <div>
          <form autocomplete="off">
            <div role="tablist" class="card border mb-2">
              <div id="collapse-0" class="card-body collapse show">
                <div>
                  <div>
                    <div class="form-group">
                      <h3>Importação de planílha (CSV/XLSX)</h3>
                      <span>
                        Importação baseada no seguinte
                        <a
                          href="https://firebasestorage.googleapis.com/v0/b/ecom-feed-importer.appspot.com/o/public%2Ftemplate.csv?alt=media&token=85526ea3-ce75-4724-8184-cbae766e78fa"
                        >
                          exemplo.
                        </a>
                      </span>
                      <b-form-file
                        v-model="file"
                        placeholder="Escolha o arquivo (csv/xlsx)..."
                        drop-placeholder="Drop file here..."
                      />
                    </div>
                    <button class="btn btn-primary" type="submit" @click="uploadFile()">
                      <span class="d-inline-block" style="width: 1.15rem">
                        <span>
                          <i class="fa fa-floppy-o"></i>
                        </span>
                      </span>
                      <slot name="submit-label">
                        {{ i19save }}
                      </slot>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppFeedImporter.js"></script>
